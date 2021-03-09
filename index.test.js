const { sum, multiply } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test('adds 1.5 + 2.5 to equal 4', () => {
  const result = sum(1.5, 2.5);
  expect(result).toBe(4);
});

test('multiplies 3 x 3 to equal 9', () => {
  const result = multiply(3, 3);
  expect(result).toBe(9);
});