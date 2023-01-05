const objectValues = (object) => {
  let values = Object.entries(object)
    .filter((e) => typeof e[1] != "function" && "array" && "object")
    .map((e) => `${e[0]}: ${e[1]}`)
    .join(", ");
  return values;
};

module.exports = objectValues;

console.log(
  objectValues({
    name: "Ganster",
    surname: "Guilian",
    age: 24,
    presentation: () => {},
    coolos: () => {},
  })
);
