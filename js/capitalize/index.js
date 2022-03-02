/** Write a function that, given an input string, returns a version of it
 * where the first letter in each word is capitalized.
 * --- Examples ---
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('meaningless input jndcmksnxiwdc') === 'Meaningless Input Jndcmksnxiwdc'
 * capitalize(' a b c ') === 'A B C'
 */

function capitalize(str) {
  /**
   * This solution splits the string into an array,
   * and for each word it capitalizes the first letter and adds
   * it to the rest of the word. Finally, it joins the array into
   * a string again with a blank space in between each.
   */
  const words = str.trim().split(' ');
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

module.exports = capitalize;
