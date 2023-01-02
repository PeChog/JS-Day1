const myAge = (age) => {
  if (age >= 18) {
    return "Majeur";
  } else {
    return "Mineur";
  }
};

module.exports = myAge;

console.log(myAge(3));
