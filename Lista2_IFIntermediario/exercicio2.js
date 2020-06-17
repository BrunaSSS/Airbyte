/*Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
para Fahrenheit ou Fahrenheit para Celsius.*/

user = require("readline-sync");
var escolha = user.question("Para qual grau deseja converter (Celsius ou Fahrenheit): ")
var temperatura = user.questionInt("Digite a temperatura: ")

if(escolha === "Celsius"){
    console.log((temperatura-32) * 5/9);
}
else if(escolha === "Fahrenheit"){
    console.log((temperatura*9/5)+32);
}
else {
    console.log("não foi possivel fazer a conversão");
}