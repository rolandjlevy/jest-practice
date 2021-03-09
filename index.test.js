const { 
  sum, 
  multiply,
  totalValue,
  cloneArray
} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test('multiplies 3 x 3 to equal 9', () => {
  const result = multiply(3, 3);
  expect(result).toBe(9);
});

test('gets total of shopping list values', () => {
  const items = {
    'eggs': 2,
    'milk': 1,
    'bread': 2,
    'cheese': 4,
    'bacon': 3
  };
  const result = totalValue(items);
  expect(result).toBe(12);
});

test('gets clone of array', () => {
  const array = [1, 2, 3, 4, 5];
  const result = cloneArray(array);
  expect(result).toEqual(array);
});