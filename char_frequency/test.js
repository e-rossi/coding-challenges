const mostFrequent = require('./index');

test('Finds correct char', () => {
  expect(mostFrequent('aaaAAAAbcderj')).toEqual('A');
});

test('Finds correct chars even with multiples maxes in it', () => {
  expect(mostFrequent('aAbc1123444667778d663334e')).toEqual('3,4,6');
});
