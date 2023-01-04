const removeDuplicate = (array) => {
  return [...new Set(array)];
};

module.exports = removeDuplicate;

console.log(removeDuplicate([1, 2, 2, 3]));
