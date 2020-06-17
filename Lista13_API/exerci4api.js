const axios = require('axios');
user = require("readline-sync");

function mostraEndereco(){
    var cep= user.question("Digite o CEP : ");
    console.log("https://api.postmon.com.br/v1/cep/" + cep);
    axios.get("https://api.postmon.com.br/v1/cep/" + cep).then(function (response) {
        console.log(`Cidade: ${response.data.cidade} - Rua: ${response.data.logradouro} - Estado: ${response.data.estado_info.nome}`);
    });
}

mostraEndereco();