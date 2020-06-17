/*Faça um programa que recebe um número e imprima todos os números pares de 0 até
o número inserido.
Ex: usuário inseriu 8
O programa imprime
0
2
4
6
8*/

var n2 = 8
var i = 0;

while(i <= n2){
    if (i % 2 == 0){
        console.log(i);
    }
    i++;
}
