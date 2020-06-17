const axios = require('axios');
user = require("readline-sync");

function verificaResposta(){
    var resposta = user.question("Digite yes ou no: ");

    axios.get("https://yesno.wtf/api").then(function (response){
        if (resposta == `${response.data.answer}`){
            console.log("Parabens voce acertou");
        } else {
            console.log("Que pena, voce errou.");
        }
    })
}

verificaResposta();


