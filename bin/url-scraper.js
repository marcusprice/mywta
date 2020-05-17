#!/usr/bin/env node

/**
 * Executable for scraping all hike urls and saving them into the
 * urls table. Should be the first scraping utility ran.
 */

const got = require('got');
const cheerio = require('cheerio');
const { Pool, Client } = require('pg')
const pool = new Pool();

//base url to prepend
let hikesUrl = 'https://www.wta.org/go-outside/hikes?b_start:int=';

pool.connect((err, client, release) => {
  if(err) {
    console.log(err);
  } else {
    //page indexes are in increments of 30
    for(let i = 0; i <= 3810; i += 30) {
      got(hikesUrl + i) //append the index to the base-url
        .then(response => {

          //cheerio is used to to parse through html nodes
          const $ = cheerio.load(response.body);

          //loop through each hike link a tag
          $('.listitem-title').each((i, link) => {
            const href = link.attribs.href; //grab the url attribute

            //sql for inserting the url
            let query = `INSERT INTO urls (url) VALUES('${href}');`;

            client.query(query, (err, res) => {
              if(err) {
                console.log(err);
              }
            })
          });
        })

        .catch(err => {
          console.error(err)
        })
    }
  }
})
