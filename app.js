'use strict'

function alertaCompra() {
    alert("Producto agregado al carrito");
}

function validar(){

var todo_correcto = true;
var validoNombre = true;
var validoNumero = true;
var validoConsulta = true;


if(document.getElementById('nombre').value.length < 1 ){
    validoNombre = false;
}
if(isNaN(document.getElementById('numero').value)){
    validoNumero = false;
}
if(document.getElementById('consulta').value.length < 1 ){
    validoConsulta = false;
}


if(!validoNumero){
    alert('Por favor ingrese un numero de telefono válido');
} else {
    if(!validoNombre){
        alert('Por favor ingrese su nombre');    
    } if (!validoConsulta){
        alert('Por favor, ingrese su consulta');
    } 
} 

if(validoConsulta && validoNombre && validoNumero){
    alert('formulario enviado exitosamente');
}

return true;
}


const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')


// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -(100/3)

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})