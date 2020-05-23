const Hikes = require('../models/Hikes');
const { parseBool, getCoordinateBoundries } = require('../lib/tools');

const getHikes = async (request, callback) => {
  const convertedRequest = convertParameters(request);
  const hikeData =  await Hikes.getHikes(convertedRequest);

  callback(hikeData.rows);
}

const getHikesWithLocation = async (request, callback) => {
  const convertedRequest = convertParameters(request);
  const coordinateBoundries = getCoordinateBoundries({lat: convertedRequest.userLat, lng: convertedRequest.userLng}, convertedRequest.distance);
  const hikeData = await Hikes.getHikesWithLocation(request, coordinateBoundries);

  callback(hikeData.rows);
}

const convertParameters = (request) => {
  const keys = Object.keys(request);

  keys.forEach(key => {
    if (request[key] === 'true' || request[key] === 'false') {
      request[key] = parseBool(request[key]);
    } else {
      request[key] = parseFloat(request[key]);
    }
  });

  return request;
}

exports.getHikes = getHikes;
exports.getHikesWithLocation = getHikesWithLocation;
