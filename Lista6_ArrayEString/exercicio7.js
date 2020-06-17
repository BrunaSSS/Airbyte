user = require("readline-sync");
var palavra = user.question("Digite uma palavra: ");    

if(palavra.includes('nb') || palavra.includes('np')){
    console.log('Palavra escrita incorretamente');
} else {
    console.log('Palavra escrita corretamente')
}