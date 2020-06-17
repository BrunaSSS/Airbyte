

var readlineSync = require('readline-sync')

var idade = readlineSync.question('Qual a sua idade ')

if (idade >= 16&& idade <18) {
    console.log("Você pode votar, mas não é obrigatorio")
} 
else if (idade >= 18 && idade < 65) {
    console.log("Você é obrigado a votar!")
}
else if (idade >= 65) {
    console.log ("Você pode votar mas nao é obrigatorio!")

}
