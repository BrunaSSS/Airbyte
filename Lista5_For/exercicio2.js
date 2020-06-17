user = require("readline-sync");
var valorInicial= user.questionInt("Digite um numero: ");
var valorFinal= user.questionInt("Digite um numero: ");

for (var cont = valorInicial; cont <= valorFinal; cont++){
    console.log(cont);
}

