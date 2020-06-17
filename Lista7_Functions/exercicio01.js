/*Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
volume (v = 4/3.pi.R³). Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.*/

var readlineSync = require('readline-sync');

function calculaVolumeRaio(raio){
    var volume = 4/3 * Math.PI * Math.pow(raio, 3);
    var volumeFixed = volume.toFixed(2);
    console.log(volumeFixed);
}

var raio = readlineSync.question('Informe o raio de uma esfera: ');

calculaVolumeRaio(raio);
