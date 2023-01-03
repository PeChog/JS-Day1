const ageFilter = (array) => {
  return array.filter((element) => element >= 18);
};

module.exports = ageFilter;
console.log(ageFilter([3, 12, 24, 16, 18]));
