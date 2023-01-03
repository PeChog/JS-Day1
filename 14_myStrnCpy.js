const strCpy = (str, n) => {
  newStr = "";
  let i = 0;
  do {
    newStr = newStr + str[i];
    i++;
  } while (newStr.length <= n - 1 && i < str.length);
  return newStr;
};

module.exports = strCpy;

console.log(strCpy("Hello world", 4));
