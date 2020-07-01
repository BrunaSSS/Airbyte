const axios = require("axios");
user = require("readline-sync");
var fs = require("fs");

function mostraDadosPokemon() {
  var pokemonDigitado = user
    .question("Por favor, digite o nome ou o ID do pokemon desejado: ")
    .toLowerCase();

  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + pokemonDigitado)
    .then(function (response) {
      console.log(
        `Nome: ${response.data.forms[0].name}` +
          "\n" +
          `Tipo: ${response.data.types[0].type.name}`
      );
      console.log("Lista de Habilidades:");

      response.data.abilities.forEach((element) => {
        console.log(element.ability.name);
      });
      montaJsonPokedex(response);
    });
}

function montaJsonPokedex(response) {
  var listaHabilidades = [];

  response.data.abilities.forEach((element) => {
    listaHabilidades.push(element.ability.name);
  });

  var responseString = {
    nome: response.data.forms[0].name,
    tipo: response.data.types[0].type.name,
    habilidades: listaHabilidades,
  };
  fs.writeFileSync("./pokedex.json", JSON.stringify(responseString));
}

mostraDadosPokemon();