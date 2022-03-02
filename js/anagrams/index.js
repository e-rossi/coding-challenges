/** Write a function that checks whether two provided
 * strings are anagrams of each other.
 * 
 * An anagram is a piece of text that has the same characters
 * and in the same quantity of another. e.g. "listen" and "silent".
 * 
 * Consider only characters, no spaces, cases nor punctuation.
 * 
 * --- Examples ---
 * areAnagrams('Dormitory', 'dirty room') === true
 * areAnagrams('Eleven plus two', 'Twelve plus one') === true (BTW, this anagram has 13 letters!)
 * areAnagrams('hello', 'olhe') === false
 */

function areAnagrams(string1, string2) {
  /**
   * First both inout strings are sanitized,
   * then their length is checked, if after
   * sanitization they differ, that means they
   * cannot possibly be anagrams. Otherwise
   * they are both sorted and then compared,
   * If equal, they were anagrams.
   */
  string1.replace(/[^\w]/g, '').toLowerCase();
  string2.replace(/[^\w]/g, '').toLowerCase();

  if (string1.length !== string2.length) {
    return false;
  }

  return string1.split('').sort().join('') === string2.split('').sort().join('');
}

function areAnagramsWithCharMaps(string1, string2) {
  /**
   * This solution creates a char map for each input string
   * then checks every key in each for their values.
   * If the maps have different amounts of keys or if at any
   * time a key differs in value, they are not anagrams.
   */
  function buildCharMap(str) {
    const charMap = {};
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();

    for (const char of cleanedStr) {
      charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
  }

  const charMap1 = buildCharMap(string1);
  const charMap2 = buildCharMap(string2);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }
  return true;
}

module.exports = areAnagrams;
