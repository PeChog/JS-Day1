const evilGetNbr = (number) => {
  parseInt(number);
  if (number > 0) {
    return "+";
  } else {
    return "-";
  }
};

module.exports = evilGetNbr;
console.log(evilGetNbr("-14"));