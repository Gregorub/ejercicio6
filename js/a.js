var entro = 1;
var cara = '';

var cantidadDeGatos = 10;
console.log ('Ejercicio A, cantidad de gatos: ' + cantidadDeGatos);
imprimir(cantidadDeGatos);

cantidadDeGatos = 1;
console.log ('Ejercicio A, cantidad de gatos: ' + cantidadDeGatos);
imprimir(cantidadDeGatos);

cantidadDeGatos = 4;
console.log ('Ejercicio A, cantidad de gatos: ' + cantidadDeGatos);
imprimir(cantidadDeGatos);

function imprimir(cantidadGatos) {
    for (var i=1; i<=cantidadGatos; i++){
        if (i === 1) {
            entro = 1; //reinicio contador para multiples llamados de la función imprimir
        }
        switch(entro){
            case 1: 
                cara = '😺';
                break;
            case 2: 
                cara = '🙀';
                break;
            case 3: 
                cara = '😹';
                break;
            default: cara = '';
        }
    
        var resultado = 'Gato #' + i + ':' + cara;
        console.log(resultado);
        entro++;
    
        if (entro > 3) {
            entro = 1;
        }
    }
}