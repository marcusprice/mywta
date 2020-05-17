#!/usr/bin/env node

/**
 * Executable for scraping all valid wta hikes. Requires that the different hike
 * urls have been scraped (see url-scraper.js )and saved to the urls database table.
 */

const { asyncForEach } = require('../lib/tools');
const got = require('got');
const cheerio = require('cheerio');
const { Pool } = require('pg')
const pool = new Pool();

const hikeScraperInitial = async () => {
  //get an array of all the urls
  const res = await pool.query('SELECT * FROM urls');

  //loop through each URL scraping data from the WTA site
  asyncForEach(res.rows, async (hike, index) => {
    //get html from the hike url/page
    const html = await got(hike.url);

    //cheerio is used to to parse through html nodes
    const $ = cheerio.load(html.body);
    //all data for the hike is store in the hike data object
    let hikeData = {};

    hikeData.url = hike.url;  //url of the hike

    //latitude & longitude
    if($('.latlong span').eq(0).length) { //if the latlong tag exists
      hikeData.latitude = parseFloat($('.latlong span').eq(0).text());
      hikeData.longitude = parseFloat($('.latlong span').eq(1).text());
    } else {  //lat long tag does not exist
      //this missing information is vital to app, so skip this hike
      return;
    }

    //hike name
    if($('.documentFirstHeading').length) { //if the hike name exists
      hikeData.name = $('.documentFirstHeading')[0].children[0].data;
    } else {  //hike name does not exist
      //this missing information is vital to app, so skip this hike
      return;
    }

    //hike region
    if($('#hike-region span').length) { //if the hike region exists
      hikeData.region = $('#hike-region span')[0].children[0].data;
    } else {  //the hike region does not exist
      //this missing information is vital to app, so skip this hike
      return;
    }

    //hike length
    if($('#distance span').length) {  //if the hike length exists
      hikeData.length = parseFloat($('#distance span')[0].children[0].data.split(' ')[0]);
    } else {  //hike length does not exist
      hikeData.length = 2000; //default value of 2000 to avoid showing in searches under 50 miles
    }

    //hike trail type
    if($('#distance span').length) {  //if the hike type tag exists
      hikeData.trailType = $('#distance span')[0].children[0].data.split(' ').slice(-1)[0];
    } else {
      hikeData.trailType = 'roundtrip'; //default value is roundtrip (rare to use default)
    }

    //hike rating
    if($('.current-rating').length) { //hike rating exists
      hikeData.rating = parseFloat($('.current-rating')[0].children[0].data.split(' ')[0]);
    } else {
      hikeData.rating = 0;  //default value is 0 so it doesn't show up in searches with rating above 0
    }

    //hike info
    if($('#hike-body-text p').length) { //if hike info exists
      hikeData.info = $('#hike-body-text p').html();
    } else {
      hikeData.info = ''; //default is blank
    }

    //driving directions
    if($('#driving-directions p').eq(1).length) { //if hike directions exists
      hikeData.drivingDirections = $('#driving-directions p').eq(1).html();
    } else {
      hikeData.drivingDirections = '';  //default is blank
    }

    //hike image url
    if($('.image-with-caption img').length) { //if img url exists
      hikeData.imgURL = $('.image-with-caption img')[0].parent.attribs.href;
    } else {
      hikeData.imgURL = ''; //default is blank
    }

    //elevation logic
    //default values are 15000 (much higher than the largest elevation/elevation gain) to avoid searches for smaller elevations
    if($('.hike-stat:nth-child(3) div:nth-child(2)').text().indexOf('Gain') !== -1) { //if the elevation gain is present, the elevation most likely is too
      hikeData.elevationGain = parseFloat($('.hike-stat:nth-child(3) div:nth-child(2) span').text()) || 15000;
      hikeData.elevation = parseFloat($('.hike-stat:nth-child(3) div:nth-child(3) span').text()) || 15000;
    } else if($('.hike-stat:nth-child(3) div:nth-child(2)').text().indexOf('Highest') !== -1) {
      //there is only elevation on this page
      hikeData.elevation = parseFloat($('.hike-stat:nth-child(3) div:nth-child(2) span').text()) || 15000;
      hikeData.elevationGain = 15000;
    } else {
      //there is neither elevation gain nor elevation
      hikeData.elevation = 15000;
      hikeData.elevationGain = 15000;
    }

    //hike features
    //if tag exists input us true (1) otherwise it's false (0)
    hikeData.coast = $('#hike-features .feature[data-title=Coast]').length;
    hikeData.rivers = $('#hike-features .feature[data-title=Rivers]').length;
    hikeData.lakes = $('#hike-features .feature[data-title=Lakes]').length;
    hikeData.waterfalls = $('#hike-features .feature[data-title=Waterfalls]').length;
    hikeData.oldGrowth = $('#hike-features .feature[data-title=Old\\ growth]').length;
    hikeData.fallFoliage = $('#hike-features .feature[data-title=Fall\\ foliage]').length;
    hikeData.wildflowersMeadows = $('#hike-features .feature[data-title=Wildflowers\\/Meadows]').length;
    hikeData.mountainViews = $('#hike-features .feature[data-title=Mountain\\ views]').length;
    hikeData.summits = $('#hike-features .feature[data-title=Summits]').length;
    hikeData.wildlife = $('#hike-features .feature[data-title=Wildlife]').length;
    hikeData.ridgesPasses = $('#hike-features .feature[data-title=Ridges\\/passes]').length;
    hikeData.establishedCampsites = $('#hike-features .feature[data-title=Established\\ campsites]').length;
    hikeData.kids = $('#hike-features .feature[data-title=Good\\ for\\ kids]').length;
    hikeData.dogs = $('#hike-features .feature[data-title=Dogs\\ allowed\\ on\\ leash]').length;

    //pass requirements
    if($("a[title='Learn more about the various types of recreation passes in Washington']").length) {
      hikeData.passRequired = $("a[title='Learn more about the various types of recreation passes in Washington']").html();
    } else {
      hikeData.passRequired = "None"; //default is none
    }

    //store all the values in an array
    const values = [hikeData.url, hikeData.latitude, hikeData.longitude, hikeData.name, hikeData.region, hikeData.length, hikeData.trailType,
    hikeData.rating, hikeData.info, hikeData.drivingDirections, hikeData.imgURL, hikeData.elevationGain, hikeData.elevation,
    hikeData.coast, hikeData.rivers, hikeData.lakes, hikeData.waterfalls, hikeData.oldGrowth, hikeData.fallFoliage, hikeData.wildflowersMeadows,
    hikeData.mountainViews, hikeData.summits, hikeData.wildlife, hikeData.ridgesPasses, hikeData.establishedCampsites, hikeData.kids,
    hikeData.dogs, hikeData.passRequired];

    //sql in to insert hike
    const sql = 'INSERT INTO hikes ' +
    '(url, latitude, longitude, name, region, length, trailtype, rating, info, drivingdirections, imgurl, elevationgain, elevation, ' +
    'coast, rivers, lakes,  waterfalls, oldgrowth, fallfoliage, wildflowersmeadows, mountainviews, summits, wildlife, ridgespasses, ' +
    ' establishedcampsites, kids, dogs, passrequired) ' +
    'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)' +
    'returning index;'

    const addedHike = await pool.query(sql, values);  //inserts the hike
    console.log('finished with ' + addedHike.rows[0].index);  //reports what hike has last been inserted
  });
}

hikeScraperInitial();
