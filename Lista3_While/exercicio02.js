/*Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
usar o operador de multiplicação (*)*/

var readlineSync = require('readline-sync');

var n1 = readlineSync.questionInt('Digite o primeiro número:');
var n2= readlineSync.questionInt('Digite o segundo número:');

var i = 0;
var resultado = 0;

while(i < n2){
    resultado += n1;
    i++;
}

console.log(resultado);