/** Given an array and a chunk size, divide the array into
 * subarrays of legth equal size.
 * --- Examples ---
 * chunk([1, 2, 3, 4], 2) === [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4], 3) === [[1, 2, 3], [4]]
 * chunk([1, 2, 3, 4], 10) === [[1, 2, 3, 4]]
 */

function chunk(array, chunkSize) {
  /**
   * This is the solution I came up with,
   * first the array of arrays that will be
   * returned is created and then the variable
   * that will store each subarray.
   * Iterating over the input array, each
   * element is pushed to the subarray until
   * it reaches the chunk size, that's when
   * it is pushed to the big array and the
   * variable content is reset.
   * At the end of the process, if there is still a
   * subarray with elements it's pushed to the big array.
   */
  const chunkedArray = [];
  let subArray = [];
  for (let index = 0; index < array.length; index++) {
    subArray.push(array[index]);
    if (subArray.length === chunkSize) {
      chunkedArray.push(subArray);
      subArray = [];
    }
  }
  if (subArray.length > 0) chunkedArray.push(subArray);
  return chunkedArray;
}

function chunkWithSlice(array, chunkSize) {
  /**
   * This approach takes a more efficient path,
   * by using the slice method, the input array
   * is sliced in "chunkSize" sized pieces and added
   * to the big array.
   */
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunkedArray;
}

module.exports = chunk;
