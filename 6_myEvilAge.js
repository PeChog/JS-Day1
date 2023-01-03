const myAge = (age) => {
  age = parseInt(age);
  if (age >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
};

module.exports = myAge;

console.log(myAge("18"));
