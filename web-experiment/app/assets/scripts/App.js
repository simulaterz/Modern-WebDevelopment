var $ = require('jquery');
var Person = require('./modules/Person');

alert("ABC 112");

var john = new Person("John Doe", "Blue");
john.greet();

$('h1').remove();
