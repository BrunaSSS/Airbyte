user = require("readline-sync");

var n1 = user.questionInt("Digite um numero: ")
var cont = 0;
var teste = "";

while( cont < n1){
    var estrelas = "*";
    teste = teste.concat(estrelas);
    console.log(teste);
    cont++;
}
