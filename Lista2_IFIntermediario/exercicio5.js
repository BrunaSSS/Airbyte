/*Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
em reais a ser pago o novo valor a ser pago por essa residência com um
desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade
de kw gasto por residência.*/

user = require("readline-sync");

var kwConsumido= user.questionInt ("Informe os kw consumidos: ");
var kwEmReais = ((0.143 * 1045)/100).toFixed(2);
var kwRealConsumido = kwEmReais * kwConsumido;
console.log("o valor em reais por kw é: " + kwReal)
console.log("o valor em reais a ser pago é: " + kwRealConsumido);
console.log("o novo valor a ser pago (com 10% de desconto) é: " + (kwRealConsumido - (kwRealConsumido*0.1)));
