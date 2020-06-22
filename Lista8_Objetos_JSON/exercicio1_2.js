var user = require("readline-sync");
const fs = require("fs");
var cor = user.question("Digite a cor do carro: ");
var modelo = user.question("Digite o modelo do carro: ");
var marca = user.question("Digite a marca do carro: ");

function criaObjetoCarro(cor, modelo, marca) {
  var carro = new Object();
  carro.cor = cor;
  carro.modelo = modelo;
  carro.marca = marca;

  console.log(
    `Cor: ${carro.cor}, Modelo: ${carro.modelo}, Marca: ${carro.marca}`
  );

  criaObjetoJson(carro);
}

function criaObjetoJson(carro) {
  var carroSerializado = JSON.stringify(carro);
  console.log(carroSerializado);
  fs.writeFileSync("./exercicio01_02.json", carroSerializado);
}

criaObjetoCarro(cor, modelo, marca);
