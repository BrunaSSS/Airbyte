user = require("readline-sync");
var palavra = user.question("Digite uma palavra: ");    

if(palavra.endsWith('al')){
    console.log('palavra não identificada');
}