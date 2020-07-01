var user = require("readline-sync");
var numero = user.questionInt("Digite um numero: ");

function calculaTabuada(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(`${i} x ${numero} = ${resultado}`);
  }
}

calculaTabuada(numero);
