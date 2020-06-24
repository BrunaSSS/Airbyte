/*Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC 
utilize : https://www.npmjs.com/package/fasam-imc-calc
*/

var user = require("readline-sync");
var imc = require("fasam-imc-calc");

var peso = user.question("Digite aqui o seu peso: ");
var altura = user.question("Digite aqui a sua altura ");

var peso2 = parseFloat(peso);
var altura2 = parseFloat(altura);

var resultado = new imc();

var teste = resultado.calc(peso2, altura2);

console.log(`O imc é: ${teste}`);
