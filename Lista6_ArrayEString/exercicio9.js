user = require("readline-sync");
var frase = user.question("Digite uma palavra: ");  
frase = frase.replace('bosta', 'estrume');
console.log(frase);