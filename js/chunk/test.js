const chunk = require('./index');

test('chunk divides an array of 10 elements with chunk size 2', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual(
    [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
  );
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
  expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
  expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)).toEqual(
    [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
  );
});
