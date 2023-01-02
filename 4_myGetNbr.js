const positiveNegative = (number) => {
  if (number < 0) {
    return "-";
  } else if (number === 0) {
    return "0";
  } else {
    return "+";
  }
};

module.exports = positiveNegative;

console.log(positiveNegative(0));
