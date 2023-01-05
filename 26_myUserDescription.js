const userDescription = (description) => {
  return `Je m'apelle ${description.surname} ${description.name}, j'ai ${description.age} ans`;
};

module.exports = userDescription;

console.log(userDescription({ surname: "a", name: "A", age: 23 }));
