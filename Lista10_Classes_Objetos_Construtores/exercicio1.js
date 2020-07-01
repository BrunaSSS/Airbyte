/*Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso : 
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor
 e inicialize as propriedades com estes valores. 
Após isso informe ao usuário para cadastrar o primeiro carro e peça, 
o nome, modelo e cor. 
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.*/

class Carro {
  constructor (nome, modelo, cor){
    this.nome = nome
    this.modelo = modelo
    this.cor = cor
  }
}

var rs = require('readline-sync');
  var nomeCarro1 = rs.question('Qual o nome do carro? ');
	var modeloCarro1 = rs.question('Qual o modelo do carro? ');
  var corCarro1= rs.question('Qual a cor do carro? ');
  
  var nomeCarro2 = rs.question('Qual o nome do carro? ');
	var modeloCarro2 = rs.question('Qual o modelo do carro? ');
	var corCarro2 = rs.question('Qual a cor do carro? ');
  
  var carro1 = new Carro(nomeCarro1, modeloCarro1, corCarro1);
  var carro2 = new Carro(nomeCarro2, modeloCarro2, corCarro2);

 function saoCarrosIguais(carro1, carro2) {
 	var nomesSaoIguais = carro1.nome == carro2.nome;
	var modelosSaoIguais = carro1.modelo == carro2.modelo;
  if (nomesSaoIguais && modelosSaoIguais) {
		return true;
 	}
 	return false;
}
 var saoIguais = saoCarrosIguais(carro1, carro2);

 console.log('são iguais: ' + saoIguais);

