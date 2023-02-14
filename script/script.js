const Pokedex = require("pokeapi-js-wrapper");

let options = {
    protocol: 'https',
    hostName: 'localhost:443',
    versionPath: '/api/v2/',
    cache: true,
    timeout: 5 * 1000 // 5s
  };

let P = new Pokedex.Pokédex(options);

P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
    .then(function(response) {
      console.log(response); // resource function accepts singles or arrays of URLs/paths
    });