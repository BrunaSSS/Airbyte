var user = require("readline-sync");
var numero1 = user.questionInt("Digite o primeiro numero: ");
var numero2 = user.questionInt("Digite o segundo numero: ");

function comparaMenorNumero(numero1, numero2) {
  var menor = numero1 < numero2 ? numero1 : numero2;
  console.log(menor);
}

comparaMenorNumero(numero1, numero2);
