/** Given a string, return the character that appears the most in it.
 * 
 * --- Examples ---
 * mostFrequent('asdfffffffg') === 'f'
 * mostFrequent('apple 12311123111') === '1'
 */

function mostFrequent(str) {
  /**
   * This solution iterates over the string just once
   * and as it does, it keeps track of the max value
   * as well as computes values for all chars
   * After finishing that, whatever chars have the value equal
   * to the maximum, are returned, separated by commas.
   */
  const charMap = {};
  let maxValue = 0;
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    if (charMap[char] >= maxValue) {
      maxValue = charMap[char]
    }
  }
  return Object.keys(charMap).filter(
    char => charMap[char] === maxValue
  ).join(',');
}

module.exports = mostFrequent;
