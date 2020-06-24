var user = require("readline-sync");

var dia = user.question("Digite o dia do seu nascimento: ");
var mes = user.question("Digite o mes do seu nascimento: ");
var ano = user.question("Digite o ano do seu nascimento: ");

var AgeFromDate = require('age-calculator');

var idade = new AgeFromDate(new Date(ano, mes, dia)).age;
console.log(`Você tem ${idade} anos`);