function consumoDeAPI() {
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/",
        success: function (response) {
            console.log(response)
        /*  for (var i = 0; i < response.results.length; i++) {
                console.log(response.results[i]);
            } */
            for (var pokemon of response.results) {
                console.log(pokemon.url) /* Luego de "pokemon" podemos usar los nombres usados en el arreglo para fitrar pokemon.name */
            }
            /* foreach, map, filter */
            /* console.time('hola') */
            response.results.forEach(function(pokemon , cualquiercosa) { /* Este cualquier cosa es un indice autoincreemtable que quedara ahi solo en base al orden esto es un callback */
                console.log(pokemon.name + " " + cualquiercosa)
            });
            /* console.timeEnd('hola') */

            /* filter */
            var filtrados = response.results.filter(function(pokemon){
                return pokemon.name == 'metapod'
            });
            console.log(filtrados)
        }
    });
}

consumoDeAPI();