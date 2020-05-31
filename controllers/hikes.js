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
  const convertedRequest = convertParameters(request);
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

exports.getHikes = getHikes;
exports.getHikesWithLocation = getHikesWithLocation;
