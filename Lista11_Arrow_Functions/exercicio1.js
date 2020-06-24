var rs = require('readline-sync');
var fs = require('fs');
var json = fs.readFileSync('./cars.json');
var cars = JSON.parse(json);

var valor = rs.questionInt('Por favor, informe um valor de potência de carro: ');

var resultado = (valor) => cars.filter(c => c.Horsepower >= valor).length;
  
console.log(`Há ${resultado(valor)} carros com potência maior do que o valor informado`);