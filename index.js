const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const totalValue = (obj) => {
  return Object.values(obj).reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
}

const cloneArray = (array) => [...array];

const test = () => {
  return true;
}

module.exports = {
  sum,
  multiply,
  totalValue,
  cloneArray
};