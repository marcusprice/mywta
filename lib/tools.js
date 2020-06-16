/**
 * Tools module.
 * @module tools.js
 */

/**
 *@function async foreach utility
 */
const asyncForEach = async (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    await callback(array[i], i);
  }
}

/**
 *@function converts string boolean identifiers into real boolean
 */
const parseBool = value => {
  let output = true;
  if(value === 'false') {
    output = false;
  }
  return output;
}

/**
 *@function converts a radian into a degree
 */
const rad2deg = radians => radians * 180 / Math.PI;

/**
 *@function converts a degree into a radian
 */
const deg2rad = degrees => degrees * Math.PI / 180;

/**
 *@function returns coordinate boundries for variable radius (in miles) of a
 *specific location
 */
const getCoordinateBoundries = (userLocation, distance) => {
  const LAT = userLocation.lat;
  const LNG = userLocation.lng;
  const RADIUS = 3958.761; //(the Earth's radius)

  //lattitude boundries
  let maxLat = LAT + rad2deg(distance / RADIUS);
  let minLat = LAT - rad2deg(distance / RADIUS);

  //longitude boundries (longitude gets smaller when latitude increases)
  let maxLng = LNG + rad2deg(distance / RADIUS) / Math.cos(deg2rad(LAT));
  let minLng = LNG - rad2deg(distance / RADIUS) / Math.cos(deg2rad(LAT));

  return {
    maxLat: maxLat,
    minLat: minLat,
    maxLng: maxLng,
    minLng: minLng
  };
}

exports.asyncForEach = asyncForEach;
exports.parseBool = parseBool;
exports.rad2deg = rad2deg;
exports.deg2rad = deg2rad;
exports.getCoordinateBoundries = getCoordinateBoundries;
