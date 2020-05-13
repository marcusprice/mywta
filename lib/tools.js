/**
 * Tools module.
 * @module tools.js
 */

module.exports = {
  /** async/await foreach utility */
  asyncForEach: async (array, callback) => {
    for(let i = 0; i < array.length; i++) {
      await callback(array[i], i);
    }
  }
}
