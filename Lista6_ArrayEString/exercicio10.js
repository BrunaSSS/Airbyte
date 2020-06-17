user = require("readline-sync");
var texto = user.question("Digite um texto: ");  
var textoUp = '';

for(var i = 0; i < texto.length; i++){
    textoUp += texto.charAt(i).toUpperCase();
}

console.log(textoUp)