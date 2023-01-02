const evilStr = (str) => {
  let newStr = "";
  for (let i = str.length; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
};

module.exports = evilStr;

console.log(evilStr("Hello"));
