//Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

user = require("readline-sync");

var numeroA = user.questionInt("Informe o numero inteiro A: ");
var numeroB = user.questionInt("Informe o numero inteiro B: ");

if( numeroA % numeroB == 0){
    console.log(numeroA + " é divisível por " + numeroB);
}