var cantidadDeGatos = 5;
var cantidadDePasos = 3;
console.log ('Ejercicio B, cantidad de gatos: ' + cantidadDeGatos + ', cantidad de pasos: ' + cantidadDePasos);
imprimir(cantidadDeGatos, cantidadDePasos);

cantidadDeGatos = 2;
cantidadDePasos = 8;
console.log ('Ejercicio B, cantidad de gatos: ' + cantidadDeGatos + ', cantidad de pasos: ' + cantidadDePasos);
imprimir(cantidadDeGatos, cantidadDePasos);

cantidadDeGatos = 10;
cantidadDePasos = 4;
console.log ('Ejercicio B, cantidad de gatos: ' + cantidadDeGatos + ', cantidad de pasos: ' + cantidadDePasos);
imprimir(cantidadDeGatos, cantidadDePasos);

function imprimir(cantidadGatos, cantidadDePasos) {
    for (var i=1; i<=cantidadGatos; i++){
        var pasos = '';
        for (var j=1; j<=cantidadDePasos; j++){
            pasos = pasos + '🐾';
        }

        var resultado = 'Gato #' + i + ':' + '🐈' + pasos;
        console.log(resultado);
    }
}