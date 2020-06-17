const axios = require('axios');
user = require("readline-sync");

function mostraDadosPokemon(){
    var pokemonDigitado= user.question("Digite o nome ou o ID do pokemon : ");
    axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemonDigitado).then(function(response) {
        //console.log(`${response.data.forms[0].name}` + "\n" + `${response.data.types[0].type.name}`);
        var json = "";
        response.data.forms.forEach(element => {
            json = json.concat(`{"name":"${element.name}",`);
            console.log(json);
            console.log("Name: " + element.name);
        });
        console.log("Types:");
        json = json.concat(`"tipos:"[`)
        response.data.types.forEach(element => {
            json = json.concat(`"tipo:{"${element.type.name}"}`)
            console.log(element.type.name);
        });
        json = json.concat("]");
        console.log(json)
        console.log("Abilities: ");
        response.data.abilities.forEach(element => {
            console.log(element.ability.name);
        });
    })
} 

mostraDadosPokemon();