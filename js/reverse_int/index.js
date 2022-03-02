/** Given an integer, return one that is the reverse order of its components.
 * --- Examples ---
 * reverseInt(15) === 51
 * reverseInt(987) === 789
 * reverseInt(500) === 5
 * reverseInt(-150) === -51
 */

function reverseInt(n) {
  /**
   * Turns the number into a string and then into an array,
   * reverses it, back to a single string, parse the integer
   * out of that and multiplies by the original sign to maintain it.
   */
  if (n === 0) return 0;
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed, 10) * Math.sign(n);
}

module.exports = reverseInt;
