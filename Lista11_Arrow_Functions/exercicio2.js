var fs = require('fs');
var json = fs.readFileSync('./cars.json');
var cars = JSON.parse(json);

var resultado = () => cars.filter(c => c.Origin === 'Japan').length;
  
console.log(`Há ${resultado()} carros do Japão`);