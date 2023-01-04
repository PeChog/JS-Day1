const removeN = (array, index) => {
  array.splice(index, 1);
  return array;
};

module.exports = removeN;
console.log(removeN(["hello", "love", "world"], 1));
