/** Given a string, return a new string with the reversed order of characters.
 *  
 * --- Examples ---
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('The quick brown fox jumps over the lazy dog!') === '!god yzal eht revo spmuj xof nworb kciuq ehT'
 * */

function reverse(str) {
  /**
   * Turns the string into an array,
   * reverses it using JS builtin method and
   * joins the elements into a string again.
   */
  return str.split('').reverse().join('');
}

function reverseWithLoop(str) {
  /**
   * Declares an empty string and
   * loops through the input string,
   * appending every character to the
   * top of the empty one.
   */
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseWithReduce(str) {
  /**
   * Turns the string into an array and
   * reduces the array to a single string,
   * appending each element to the top
   * of the unified string.
   * 
   * This is basically the same thing as the
   * solution with the for of loop, but using the
   * reduce method.
   */
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
