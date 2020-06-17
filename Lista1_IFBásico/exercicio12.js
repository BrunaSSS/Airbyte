/*Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo
seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos)*/

user = require("readline-sync");

var nome = user.question("Informe o nome da pessoa: ");
var sexo = user.question("Informe o sexo da pessoa: ");
var estadoCivil = user.question("Informe o estado civil da pessoa: ");

//Caso sexo seja “F” e estado civil seja “CASADA”

if(sexo == "F" && estadoCivil == "CASADA"){
    user.questionInt("Informe o tempo de casada (anos): ");
}