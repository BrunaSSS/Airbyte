var fs = require('fs');
var json = fs.readFileSync('./cars.json');
var cars = JSON.parse(json);
var mean = require('mean')

var carrosEuropa = cars.filter(c => c.Origin === 'Europe');
var potenciaCarros = [];

var resultado = () => {  
  for(var i = 0 ; i < carrosEuropa.length; i++){
    potenciaCarros.push(carrosEuropa[i].Horsepower);
  }
  return mean(potenciaCarros);
}

console.log(`A média de potência dos carros da Europa é ${resultado().toFixed(2)}`);