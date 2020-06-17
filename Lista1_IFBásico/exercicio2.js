var user = require('readline-sync');
var numero = user.question("Digite um numero qualquer: ");

if (numero % 2 == 0){
console.log('Esse número é par');
}
else{
    console.log('Esse número é impar');
}