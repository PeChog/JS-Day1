const strToWordArray = (str) => (str === "" ? [] : str.split(" "));

module.exports = strToWordArray;
console.log(strToWordArray("hello world loulou"));
