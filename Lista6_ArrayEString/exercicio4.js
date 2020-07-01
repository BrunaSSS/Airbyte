user = require("readline-sync");
var palavra = user.question("Digite uma palavra: ");
var qtdeVogais = 0;
var qtdeConsoantes = 0;

for (var i = 0; i < palavra.length; i++) {
  var letra = palavra.charAt(i);
  if (
    letra.toUpperCase() == "A" ||
    letra.toUpperCase() == "E" ||
    letra.toUpperCase() == "I" ||
    letra.toUpperCase() == "O" ||
    letra.toUpperCase() == "U"
  ) {
    qtdeVogais++;
  } else {
    qtdeConsoantes++;
  }
}

console.log(
  `Essa palavra tem ${qtdeVogais} vogais e ${qtdeConsoantes} consoantes`
);
