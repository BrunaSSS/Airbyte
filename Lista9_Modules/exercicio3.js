/*Faça um algoritmo que receba um número e diga se ele é par ou ímpar
Utilize o pacote :  https://www.npmjs.com/package/is-odd*/

var user = require("readline-sync");
var isodd = require("is-odd");

var numero = user.question("Digite um numero: ");

if(!isodd(numero)){
  console.log("é par");
} else {
  console.log("é impar");
}
