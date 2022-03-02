const isPalindrome = require('./index');

test('asserts true to a palindrome with even number of chars', () => {
  expect(isPalindrome('abba')).toBeTruthy();
});

test('asserts true to a palindrome with odd number of chars', () => {
  expect(isPalindrome('aba1aba')).toBeTruthy();
});

test('asserts false to a non palindrome', () => {
  expect(isPalindrome('palindrome')).toBeFalsy();
});
