function Person(name, fav) {
  this.name = name;
  this.fav =  fav;
  this.greet = function() {
    console.log("Hello there! " + this.name + " and color " + this.fav + ".");
  }
}

module.exports = Person;
