/*Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador
. Primeiro para o jogador A e depois para o jogador B. 
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números que apenas
 o jogador A e B colocou sem repetir nenhum número
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3,4,5,7,8*/

user = require("readline-sync");
var jogadorA = user.question("Digite o nome do jogador A: ");  
var jogadorB = user.question("Digite o nome do jogador B: ");
var numerosJogadorA = [];
var numerosJogadorB = [];

for(var i = 0; i < 5; i++){
    var numero = user.questionInt(`${jogadorA}, digite um novo numero: `);
    numerosJogadorA.push(numero);  
}

for(var i = 0; i < 5; i++){
    var numero = user.questionInt(`${jogadorB}, digite um novo numero: `);
    numerosJogadorB.push(numero);  
}

var jogadoresRepetidos = numerosJogadorA.concat(numerosJogadorB);
var numerosJogadores = jogadoresRepetidos.filter((item, indice) => jogadoresRepetidos.indexOf(item) === indice);

for(var i = 0; i < numerosJogadores.length; i++){
    console.log(numerosJogadores[i])
}