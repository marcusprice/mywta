const Hikes = require('../models/Hikes');
const parseBool = require('../lib/tools').parseBool;

const getHikes = async (request, callback) => {
  const convertedRequest = convertParameters(request);
  const hikeData =  await Hikes.getHikes(convertedRequest);

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
