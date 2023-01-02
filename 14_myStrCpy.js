const strCpy = (str, n) => {
  newStr = "";

  for (let i = 0; i <= n; i++) {
    newStr = newStr + str[i];
  }
  return newStr;
};

module.exports = strCpy;

console.log(strCpy("Hello world", 5));
