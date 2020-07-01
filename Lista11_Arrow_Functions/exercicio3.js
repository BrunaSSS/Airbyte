var fs = require('fs');
var json = fs.readFileSync('./cars.json');
var cars = JSON.parse(json);
var count = 0;

var resultado = () => {
  for(var i = 0; i < cars.length; i++){
    if(cars[i].Car.includes("Ford")){
      count++;
    }
  }
  return count;
}

console.log(`Há ${resultado()} carros da Ford`);