/*Faça uma programa que receba 4 notas e calcule a mediana e apresente
 ao usuário o resultado.
Utilize o pacote : https://www.npmjs.com/package/median*/

var user = require("readline-sync");
var median = require('median');

var nota1 = user.questionInt("Digite aqui nota1: ");
var nota2 = user.questionInt("Digite aqui nota2: ");
var nota3 = user.questionInt("Digite aqui nota3: ");
var nota4 = user.questionInt("Digite aqui nota4: ");
var listaDeNotas = [nota1, nota2, nota3, nota4];

console.log(`A mediana é: ${median(listaDeNotas)}`)