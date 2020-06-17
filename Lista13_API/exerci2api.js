const axios = require('axios');


function verificaResposta(){

    axios.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes").then(function (response){
            console.log(`${response.data[0].quote} - ${response.data[0].author}`);
        }); 
    }

verificaResposta();