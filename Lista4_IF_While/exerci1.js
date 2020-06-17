/* ​Escreva um programa que pedirá para o usuário dois números entre 1 e 100. O programa deve,
  então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário. Entretanto,
  caso o número seja divisível por 7,o programa deve ao invés disso imprimir a palavra “Ping”. 
  Caso o número seja divisívelpor 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5,
   o programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez precisem fazer uso do recurso 
   “user.questionInt()” que transforma o conteúdo de um input do usuário de string para inteiro */

user = require("readline-sync");

var n1 = user.questionInt("Digite o primeiro numero: ");
var n2 = user.questionInt("Digite o segundo numero: ");

if(n1 < n2){
    comparaValoresEImprime(n1, n2);
} else {
    comparaValoresEImprime(n2, n1);
}

function comparaValoresEImprime(a , b){
    while(a <= b){
        if(a % 7 == 0){
            //executa bloco do if de cima
            if(a % 5 == 0){
                console.log("Ping Pong");
            } else {
                console.log("Ping");
            }
        }     
        else if(a % 5 == 0){
            console.log("Pong");
        } else {
            console.log(a);
        }
        a++;
    }
}