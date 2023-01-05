const createObject = (surname, name, age) => {
  let person = {
    surname: surname,
    name: name,
    age: age,
  };
  return person;
};

module.exports = createObject;
console.log(createObject("Guilian", "Ganster", 23));
