/**
 * Tools module.
 * @module tools.js
 */

const asyncForEach = async (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    await callback(array[i], i);
  }
}

const parseBool = (value) => {
  let output = true;
  if(value === 'false') {
    output = false;
  }
  return output;
}

exports.asyncForEach = asyncForEach;
exports.parseBool = parseBool;
