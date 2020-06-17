const axios = require('axios');
user = require("readline-sync");

function verificaResposta(){
    var resposta= user.questionInt("Digite o episodio : ");

    axios.get("https://www.breakingbadapi.com/api/episodes/" + resposta).then(function (response) {
        console.log(`Temporada: ${response.data[0].season}`);
        var elenco = response.data[0].characters;
        console.log("Elenco:")
        elenco.forEach(c => {
            console.log(c)
        });
    });
}

verificaResposta()