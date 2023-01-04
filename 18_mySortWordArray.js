const sortWordArray = (str) => (str === "" ? [] : str.split(" ").sort());

module.exports = sortWordArray;
console.log(sortWordArray("b c a"));
