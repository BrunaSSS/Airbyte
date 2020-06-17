/*Faça um programa que leia o valor de um produto X e leia a quantidade de reais
de um cofrinho que contenha:
a. N moedas de 1 real;
b. N moedas de 50 centavos;
c. N moedas de 25 centavos;
d. N moedas de 10 centavos;
e. N moedas de 5 centavos;
f. N moedas de 1 centavos
O programa deverá verificar se o total de reais que contém no cofrinho é o
bastante para compra o produto X e imprimir se possui ou não valor suficiente*/

user = require("readline-sync");
var produtoX= user.question("Digite o valor do produto ");

console.log(1*produtoX + " moedas de " + " 1 real");
console.log(2*produtoX + " moedas de " + " 50 centavos");



