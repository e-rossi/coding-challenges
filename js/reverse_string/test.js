const reverse = require('./index');

test('reverses a string', () => {
  expect(reverse('apple')).toEqual('elppa');
});

test('reverses a string that contains blank spaces', () => {
  expect(reverse('The quick brown fox jumps over the lazy dog!')).toEqual('!god yzal eht revo spmuj xof nworb kciuq ehT');
});
