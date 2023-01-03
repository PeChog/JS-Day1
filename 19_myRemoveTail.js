const removeTail = (array) => {
  array.pop();

  return array;
};

module.exports = removeTail;

console.log(removeTail([0, 1]));
