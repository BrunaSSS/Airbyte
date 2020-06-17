var user = require('readline-sync');
var senha = user.question('Digite sua senha');

if (senha == 1234){
    console.log('ACESSO PERMITIDO')
}
else{
    console.log('ACESSO NEGADO');
}