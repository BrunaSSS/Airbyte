var user = require('readline-sync');
var macas = user.questionFloat('Digite a quantidade de macas compradas: ')

if (macas < 12){
    var resultado = macas *0.30;
    console.log('Total: R$' + resultado.toFixed(2));
}
else{
    var resultado = macas * 0.25;
    console.log('Total: R$' + resultado.toFixed(2));

}
