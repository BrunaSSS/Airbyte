//Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores
//iguais) e escrevê-los em ordem crescente.
var n1, n2, n3, user, maior, menor, meio;

user = require("readline-sync")
n1 = user.questionInt("Digite o primeiro valor ")
n2 = user.questionInt("Digite o segundo valor ")
n3 = user.questionInt("Digite o terceiro valor ")
if ((n1 > n2) && (n1 > n3)) {
    maior = n1;
    if (n2 < n3) {
        meio = n3
        menor = n2
    }
    else   {
        meio = n2
        menor = n3
    }


}
else if ((n2 > n1) && (n2 > n3)) {
    maior = n2;
    if (n1 < n3) {
        meio = n3
        menor = n1   }
    else {   {
        meio = n1
        menor = n3
    }
}

}
console.log(menor, meio, maior)

/*Possibilidade 1: (Valor1 < Valor2) and (Valor2 < Valor3) => Valor1, Valor2, Valor3

Possibilidade 2: (Valor1 < Valor3) and (Valor3 < Valor2) => Valor1, Valor3, Valor2

Possibilidade 3: (Valor2 < Valor1) and (Valor1 < Valor3) => Valor2, Valor1, Valor2

Possibilidade 4: (Valor2 < Valor3) and (Valor3 < Valor1) => Valor2, Valor3, Valor2

Possibilidade 5: (Valor3 < Valor1) and (Valor1 < Valor2) => Valor3, Valor1, Valor2

Possibilidade 6: (Valor3 < Valor2) and (Valor2 < Valor1) => Valor3, Valor2, Valor1*/

