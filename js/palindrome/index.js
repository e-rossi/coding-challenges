/** Given a string, return true if it is a palindrome or false if not.
 * Palindromes are strings that are the same when reversed,
 * in other words, that are simmetrical.
 * Do include spaces and punctuation in the assertion.
 * 
 * --- Examples ---
 * isPalindrome('abba') === true
 * isPalindrome('abcd') === false
 * isPalindrome('.x 1-1 x.') === true
 */

function isPalindrome(str) {
  /**
   * Turns the string into an array
   * reverses it and joins all elements back
   * to a string, then checks if the reversed
   * string is equal to the input one.
   */
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

function isPalindromeWithEfficientLoop(str) {
  /**
   * Turns the string into an array then
   * loops up to half of its legth, checking
   * the element on the exact opposite side
   * to see if they match, if any of them
   * do, then returns false right away, otherwise
   * we can be sure it is a palindrome going only halfway
   * as the other elements have already been checked.
   */
  const array = str.split('');
  const len = array.length;
  for (let index = 0; index < len/2; index++) {
    if (array[index] !== array[len - index - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
