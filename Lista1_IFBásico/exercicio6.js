//Criar tomada de decisao para H/M
var user = require('readline-sync');
var genero = user.question('Digite 1 para Feminino e 2 para Masculino: ');
var altura = user.question('Digite sua altura: ');
var resultado;
if (genero == 1){
     resultado = (62.1 * altura) - 44.7;
    console.log('O seu peso ideal é: ' + resultado.toFixed(2));
 }
    else{
        resultado = (72.7 * altura) - 58;
        console.log('O seu peso ideal é: ' +resultado.toFixed(2));

}