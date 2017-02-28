var $ = require('jquery');
// var Person = require('./modules/Person'); // NodeJS
import Person from './modules/Person'; // ES6

alert("ABC 002");

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes");
  }
}

var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Adult("Jane Smith", "Light Green");
jane.greet();
jane.payTaxes();

$('h1').remove();
