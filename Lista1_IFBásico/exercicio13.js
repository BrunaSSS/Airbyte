//Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
//negativo, imprimindo o resultado

user = require("readline-sync");

var numero = user.question("Informe um numero: ");

if (numero > 0 ){
    console.log (numero * 2)
}
else if(numero < 0){
    console.log (numero * 3)
}