/*Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
triângulo é Acutângulo, Retângulo ou Obtusângulo.
Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)*/

user = require("readline-sync");

var angulo1 = user.questionInt("Informe o angulo do primeiro lado: ");
var angulo2 = user.questionInt("Informe o angulo do segundo lado: ");
var angulo3 = user.questionInt("Informe o angulo do terceiro lado: ");

if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
    console.log("E triangulo Obtusângulo");
} else if(angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
    console.log("E triangulo Retângulo");
} else if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
    console.log("E triangulo Acutângulo");
}
