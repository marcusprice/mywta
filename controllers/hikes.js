/**
 * hikes controller
 * filters the request before sending to the model
 * @module controllers/hikes
 */

//bring in the Hikes model, boolean parsing tool and coordinate boundry tools
const Hikes = require('../models/Hikes');
const { parseBool, getCoordinateBoundries } = require('../lib/tools');

/** getHikes converts the non-locational request from strings to numeric & boolean values */
const getHikes = async (request, callback) => {
  let convertedRequest = convertParameters(request);
  convertedRequest = checkForMissingParams(convertedRequest);
  const hikeData =  await Hikes.getHikes(convertedRequest);

  callback(hikeData.rows);
}

/** getHikesWithLocation converts the locational request from strings to numeric & boolean values. It also gets the boundries to pass on to the model */
const getHikesWithLocation = async (request, callback) => {
  const convertedRequest = convertParameters(request);
  const coordinateBoundries = getCoordinateBoundries({lat: convertedRequest.userLat, lng: convertedRequest.userLng}, convertedRequest.distance);
  const hikeData = await Hikes.getHikesWithLocation(request, coordinateBoundries);

  callback(hikeData.rows);
}

//converts the reqeust data from string to number & boolean
const convertParameters = request => {
  let output = request;
  const keys = Object.keys(output);

  keys.forEach(key => {
    if (output[key] === 'true' || output[key] === 'false') {
      //if the value is a string of true or false, parse the boolean
      output[key] = parseBool(output[key]);
    } else {
      //otherwise parse the numeric data
      output[key] = parseFloat(output[key]);
    }
  });

  return output;
}

//checks the params from the request and adds defaults for any missing
const checkForMissingParams = params => {
  let output = params;
  let keys = Object.keys(params);

  //range params
  if(!keys.includes('lengthMin')) output.lengthMin = 0;
  if(!keys.includes('lengthMax')) output.lengthMax = 50;
  if(!keys.includes('elevationMin')) output.elevationMin = 0;
  if(!keys.includes('elevationGainMin')) output.elevationGainMin = 0;
  if(!keys.includes('minRating')) output.minRating = 0;
  if(!keys.includes('lengthMax')) output.lengthMax = 50;
  if(!keys.includes('elevationMax')) output.elevationMax = 10000;
  if(!keys.includes('elevationGainMax')) output.elevationGainMax = 10000;

  //region params
  if(!keys.includes('centralCascades')) output.centralCascades = true;
  if(!keys.includes('easternWashington')) output.easternWashington = true;
  if(!keys.includes('issaquahAlps')) output.issaquahAlps = true;
  if(!keys.includes('mountRainierArea')) output.mountRainierArea = true;
  if(!keys.includes('northCascades')) output.northCascades = true;
  if(!keys.includes('olympicPeninsula')) output.olympicPeninsula = true;
  if(!keys.includes('pugetSoundIslands')) output.pugetSoundIslands = true;
  if(!keys.includes('snoqualmieRegion')) output.snoqualmieRegion = true;
  if(!keys.includes('southCascades')) output.southCascades = true;
  if(!keys.includes('centralWashington')) output.centralWashington = true;
  if(!keys.includes('southwestWashington')) output.southwestWashington = true;

  //pass requirement params
  if(!keys.includes('discoverPass')) output.discoverPass = true;
  if(!keys.includes('nationalParkPass')) output.nationalParkPass = true;
  if(!keys.includes('northwestForestPass')) output.northwestForestPass = true;
  if(!keys.includes('oregonStateParksDayUse')) output.oregonStateParksDayUse = true;
  if(!keys.includes('snoParksPermit')) output.snoParksPermit = true;

  //feature params
  if(!keys.includes('coast')) output.coast = false;
  if(!keys.includes('rivers')) output.rivers = false;
  if(!keys.includes('lakes')) output.lakes = false;
  if(!keys.includes('waterfalls')) output.waterfalls = false;
  if(!keys.includes('oldGrowth')) output.oldGrowth = false;
  if(!keys.includes('fallFoliage')) output.fallFoliage = false;
  if(!keys.includes('mountainViews')) output.mountainViews = false;
  if(!keys.includes('summits')) output.summits = false;
  if(!keys.includes('wildlife')) output.wildlife = false;
  if(!keys.includes('ridgesPasses')) output.ridgesPasses = false;
  if(!keys.includes('establishedCampsites')) output.establishedCampsites = false;
  if(!keys.includes('kidFriendly')) output.kidFriendly = false;
  if(!keys.includes('dogFriendly')) output.dogFriendly = false;

  return output;
}

exports.getHikes = getHikes;
exports.getHikesWithLocation = getHikesWithLocation;
