user = require("readline-sync");
var palavra = user.question("Digite uma palavra: ");  
var temVogal = false;

for(var i = 0; i <=palavra.length; i++){
    var letra = palavra.charAt(i);
    if(letra== 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        console.log('tem vogal na posicao: ' + palavra.indexOf(palavra.charAt(i)));
        temVogal = true;
    }
}

if(temVogal == false){
    console.log('não tem vogal')
}