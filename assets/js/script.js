/* Arrelgos */
/* Son una lista de datos */
/* Tienne un largo dinamico */
/* Se recorren con un for o con cualquier ciclo */
/* Saer definen entre corchetes y cad elemnto va separado por coma */
/* Tienen una posicion y un indice */
/* Pueden tener un sublemento o mas */
/* Podemos guardar funciones, objetos o distintas estructueras de datos */
/* Metodos (funciones) */


/* Los arreglos se definen desde cero y el indice */
/* Métodos de arreglos */
/* Push: agrega un elemto a la última posición del arreglo */
/* Unshift: agrega un elemto a la primera posición del arreglo */
/* Shift: elimina un elemto  a la primera posiscion del arrelgo */
/* Pop: elimina un elemento a la última posición del arreglo */
/* Splice: elimina un elemento o varios desde un elemnto indicado */

/* Endpoint: https://pokeapi.co/api/v2/pokemon/ */
function consumoAPI() {
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/",
        success: function (response) {
            console.log(response)

        }
    });
}

consumoAPI();