/*Faça um programa que receba três notas, calcule e mostre a média aritmética entre
elas, caso a média aritmética seja:
Media maior ou igual a 7 imprimir :
ALUNO APROVADO
Media menor que 7 imprimir :
ALUNO REPROVADO*/

// Pergun>tar ao usuario as 3 notas (questionInt)
// Calculo da media (soma tudo e divide pela quantidade soma)
// Verificacao (if/else para nota >=7 ou <7)

user = require("readline-sync");

var n1 = user.questionInt("Informe a primeira nota: ");
var n2 = user.questionInt("Informe a segunda nota: ");
var n3 = user.questionInt("Informe a terceira nota: ");

var media = (n1 + n2 + n3)/3 ; 

if ( media >= 7) {
    console.log ("Aluno Aprovado");
} else {
    console.log("Aluno Reprovado");
}

