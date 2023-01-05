const User = require("./28_myUserClass");

class Admin extends User {
  constructor(surname, name, age) {
    super(surname, name, age);
    this.role = "administrateur";
  }
  presentation() {
    return `Je m'apelle ${this.surname} ${this.name}, j'ai ${this.age} ans`;
  }
}

let me = new Admin("Guilian", "Ganster", 22);

module.exports = Admin;

console.log(me.presentation());
console.log(me.role);
