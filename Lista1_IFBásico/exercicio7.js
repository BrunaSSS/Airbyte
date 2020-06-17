/*Escreva um programa para ler o número de lados de um polígono regular e a medida do
lado (em cm). Calcular e imprimir o seguinte:
− Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
− Se o número de lados for igual a 5 escrever PENTÁGONO*/

//var n1, n2, n3, user, triangulo, quadrado, pentagono
user = require("readline-sync");

var n = user.questionInt("Informe a quantidades de lados do poligono: ");


if(n == 3){
    var medida = user.questionInt("Informe a medida dos lados: ");
    var area = (medida * 3)/2;
    console.log("TRIÂNGULO");
    console.log("A area do triangulo e : ".concat(area));
} else if(n == 4){
    var area = // calcular area do quadrado
    console.log("QUADRADO");
    console.log("A area do quadrado e : ".concat(area));
} else if(n == 5){
    console.log("PENTÁGONO");
} else {
    console.log("Nao foi possivel detectar o poligono");
}

/*n1 = user.questionInt("Quantos lados tem o triangulo?");
n2 = user.questionInt("Quantos lados tem o quadrado?");
n3 = user.questionInt("Quantos lados tem o pentagono?");

if (n1 == 3){
    console.log("Triângulo");
}
else if (n2 == 4){
    console.log("Quadrado");
}
else if(n3 == 5){
    console.log("Pentagono");
}*/