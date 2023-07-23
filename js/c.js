var cantidadDeGatos = 10;
var cantidadDePasos = 4;
console.log ('Ejercicio C, cantidad de gatos: ' + cantidadDeGatos + ', cantidad de pasos: ' + cantidadDePasos);
imprimir(cantidadDeGatos, cantidadDePasos);

function imprimir(cantidadGatos, cantidadDePasos) {
    for (var i=1; i<=cantidadGatos; i++){
        var pasos = '';
        for (var j=1; j<=cantidadDePasos; j++){
            pasos = pasos + '🐾';
        }

        var resultado = 'Gato #' + i + ':' + '🐈' + (i%2 === 0? '⬛': '') + pasos;
        console.log(resultado);
    }
}