/*Fazer um programa para receber um número e verificar se está entre 100 e 200.
Se estiver na faixa, imprimir:
Você digitou um numero entre 100 e 200.
Senão estiver na faixa, imprimir
Você digitou um numero fora da faixa entre 100 e 200.*/

user = require("readline-sync");

var numero = user.questionInt("Informe o numero : ");

/* OU (||) => Apenas uma condicao PRECISA ser verdadeira

1 - V 2 - V - cai no ou.
1 - V 2 - F - cai no ou.
1 - F 2 - V - cai no ou.
1 - F 2 - F - não cai no ou

/* E (&&) => TODAS as condicoes DEVEM SER verdadeiras

1 - V 2 - V - cai no e.
1 - V 2 - F - nao cai no e.
1 - F 2 - V - nao cai no e.
1 - F 2 - F - não cai no e.

if( (numeroA == 2 && numeroB == 3) || (numeroA == 4 && numeroB == 6))

*/




if(numero >= 100 && numero <= 200){
    console.log("Você digitou um numero entre 100 e 200.")
} else{
    console.log("Você digitou um numero fora da faixa entre 100 e 200.")
}