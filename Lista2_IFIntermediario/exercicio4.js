/*Uma empresa abriu uma linha de crédito para os funcionários.
O valor da prestação não pode ultrapassar 30% do salário.

Faça um programa que receba o salário, o valor do empréstimo e o número de
prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
informados pode ser zero ou negativo.*/

user = require("readline-sync");

var salario = user.questionInt ("Informe o seu salario: ");
var valorEmprestimo = user.questionInt ("Qual é o valor do emprestimo?: ");
var numeroPrestacoes = user.questionInt ("Digite o número de prestacoes ");

var valorPrestacao = valorEmprestimo/numeroPrestacoes;

if(salario <= 0 && valorEmprestimo <= 0 && numeroPrestacoes <= 0){
    console.log("Por favor informe dados válidos");
}
else if((valorPrestacao*100)/salario > 30){
    console.log("O empréstimo não pode ser concedido");
} else{
    console.log("O empréstimo pode ser concedido");
}