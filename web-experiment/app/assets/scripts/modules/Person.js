class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.fav =  favColor;
  }

  greet() {
    console.log("Hi there! " + this.name + " and color " + this.fav + ".");
  }
}

// module.exports = Person; // NodeJS
export default Person; // ES6
