const removeN = (array, index) => {
  return array.splice(index, index + 1);
};

module.exports = removeN;
console.log(removeN(["hello", "world"], 1));
