user = require("readline-sync");

var lado1 = user.questionInt("Informe a medida do primeiro lado: ");
var lado2 = user.questionInt("Informe a medida do segundo lado: ");
var lado3 = user.questionInt("Informe a medida do terceiro lado: ");

if(lado1 == lado2 && lado2 == lado3){
    console.log("E triangulo equilatero")
} else if((lado1 == lado2 && lado2 != lado3) || (lado1 != lado2 && lado2 == lado3)){
    console.log("E triangulo isoscele");
} else{
    console.log("E triangulo escaleno");
}