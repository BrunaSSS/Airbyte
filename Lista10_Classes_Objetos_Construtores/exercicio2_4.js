/*Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de um possuir maior
idade apresentar o nome de todos os que possuem maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade e inicialize
essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade. 
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos. 
Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos com maior idade e imprimir seus nomes.*/

var rs = require('readline-sync');
var media = require('./calcula-media');

class Aluno {

  constructor (nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
}

var nome1 = rs.question('Por favor, informe o nome do primeiro aluno: ');
var idade1 = rs.questionInt('Por favor, informe a idade do primeiro aluno: ');
var aluno1 = new Aluno(nome1, idade1);

var nome2 = rs.question('Por favor, informe o nome do segundo aluno: ');
var idade2 = rs.questionInt('Por favor, informe a idade do segundo aluno: ');
var aluno2 = new Aluno(nome2, idade2);

var nome3 = rs.question('Por favor, informe o nome do terceiro aluno: ');
var idade3 = rs.questionInt('Por favor, informe a idade do terceiro aluno: ');
var aluno3 = new Aluno(nome3, idade3);

var listaDeAlunos = [aluno1, aluno2, aluno3];

for(var i = 0; i < listaDeAlunos.length; i++){
  if(listaDeAlunos[i].idade >= 18){
    console.log(`O aluno ${listaDeAlunos[i].nome} é maior de idade`);
  }
}

console.log(media.calculaMediaIdadeAluno(listaDeAlunos));
