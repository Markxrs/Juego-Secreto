
//declaracion de funciones
let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numerosMaximos = 10;

console.log(numeroSecreto)
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
   let numerDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   console.log(intentos);
   if (numeroSecreto === numerDeUsuario ){
    asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    //el usuario no acerto
    if (numerDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero secreto es menor');
    } else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja()
  
}

    return;
}

function limpiarCaja() {
 document.querySelector('#valorUsuario').value = '';
   

}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numerosMaximos)+1;
   console.log(numeroGenerado);
   console.log(numerosSorteados);
   // si ya sorteamos todos los numeros
   if (numerosSorteados.length == numerosMaximos ) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles!');
   } else {
    //si el numero generado esta en la lista

   if (numerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
   } else {
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado
   }

   }

   
}
function CondicionesIniciales() {
asignarTextoElemento('h1', 'Juego del numero secreto!!');
asignarTextoElemento('p',`Indica un numero del 1 al ${numerosMaximos}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}
function reiniciarJuego() {
    //necesitamos limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
     //inicializar el numero de intentos
     CondicionesIniciales() 
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}
CondicionesIniciales() 