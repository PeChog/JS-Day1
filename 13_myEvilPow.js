function main(arg1, arg2) {
  if (arg2 === 0) return 1;
  else if (arg2 > 0) return arg1 * main(arg1, arg2 - 1);
  else return 1 / main(arg1, -arg2);
}

module.exports = main;
