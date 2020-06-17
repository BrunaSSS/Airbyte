user = require("readline-sync");

var p1 = user.question("");
var p2 = user.question("");
var p3 = user.question("");
var pago = user.questionInt("Valor total pago: ");    
var array = [];
var totalCompra = 0;
var troco = 0;

array.push(p1,p2,p3);

var cont = 1;
while(cont <= array.length){
    console.log("Produto " + cont + " - " + array[cont-1]);
    cont++;
}

troco = totalCompra - pago;

console.log("Total da compra: " + totalCompra + " $");
console.log("Troco: " + troco + " $");