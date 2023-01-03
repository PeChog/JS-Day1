const evilGetNbr = (number) => {
  parseInt(number);
  if (number > 0) {
    return "+";
  } else if (number === 0) {
    return "0";
  } else {
    return "-";
  }
};

module.exports = evilGetNbr;
console.log(evilGetNbr("-14"));
