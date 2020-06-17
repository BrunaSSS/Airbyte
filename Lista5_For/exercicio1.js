user = require("readline-sync");
var palavra = user.question("Digite uma palavra: ");
var palavraFinal = '';

for (var i=0 ; i<=palavra.length;i++){
    var letra = palavra.charAt(i);
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        palavraFinal += letra.toUpperCase();
    } else{
        palavraFinal += letra;
    }
}

console.log(palavraFinal);