/*(OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou não
Utilize o pacote : https://www.npmjs.com/package/prime-number*/

var user = require("readline-sync");
var primeNumber= require("prime-number");

var numero = user.question("Digite um numero: ");

if(primeNumber(numero)){
  console.log("É primo");
} else {
  console.log("Não é primo");
}
