var media = require('./calcula-media');
var rs = require('readline-sync');

var num1 = rs.questionInt('Por favor, informe o primeiro numero: ');
var num2 = rs.questionInt('Por favor, informe o segundo numero: ');
var num3 = rs.questionInt('Por favor, informe o terceiro numero: ');

console.log(media.media([num1, num2, num3]));

