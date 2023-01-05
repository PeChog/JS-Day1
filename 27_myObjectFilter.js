const objectFilter = (array) => {
  let person = array
    .filter((element) => element.age > 18)
    .map((e) => `${e.surname} ${e.name}`);
  return person;
};
module.exports = objectFilter;
console.log(
  objectFilter([
    { name: "A", surname: "a", age: 12 },
    { name: "B", surname: "b", age: 30 },
    { name: "coucou", surname: "cucu", age: 100 },
  ])
);
