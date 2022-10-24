'use strict'
//* alerta para cuando se agrega un producto al carrito de compras *//
function alertaCompra() {
    alert("Producto agregado al carrito");
}

//* funcion que realiza la validacion de los campos del formulario en solicitarPresupuesto.html *//
function validar(){

//* seteo todas las variables booleanas en true para luego setearlas en false si no pasan la validacion *//
var validoNombre = true;
var validoNumero = true;
var validoConsulta = true;

//*valido que el campo nombre tenga contenido *//
if(document.getElementById('nombre').value.length < 1 ){
    validoNombre = false;
}
//* valido que el contenido del campo de numero de telefono sea not a number *//
if(isNaN(document.getElementById('numero').value)){
    validoNumero = false;
}
//* valido que el campo consulta tenga contenido *//
if(document.getElementById('consulta').value.length < 1 ){
    validoConsulta = false;
}

//* acá se realizan los alert correspondientes a los campos que no pasen la validación *//
if(!validoNumero){
    alert('Por favor ingrese un numero de telefono válido');
} else {
    if(!validoNombre){
        alert('Por favor ingrese su nombre');    
    } if (!validoConsulta){
        alert('Por favor, ingrese su consulta');
    } 
} 

//* aca se realiza el alert en caso que se hayan superado todas las validaciones *//
if(validoConsulta && validoNombre && validoNumero){
    alert('formulario enviado exitosamente');
}

return true;
}


//* en este script se resuelve el carrousel que a demás de moverse, tiene habilitados botones *//
//* para que el usuario pueda navegar por ellos *//
const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')


// Cuando se hace CLICK en punto
    // se extrae la posición de ese punto
    // se aplica un transform translateX al objeto .grande
    // se quita la clase activo de TODOS puntos
    // se añade la clase activo al punto que hemos hecho CLICK

// acá recorremos TODOS los puntos
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardamos la posición de ese PUNTO
        let posicion  = i
        // Calculamos el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -(100/3)

        // MOVEMOS el grande
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los puntos
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los puntos
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

// detecto el momento en el que se realiza scroll y a través del ID ip llamo a la funcion que 
//hace uso de la api para obtener el pais del IP en cuestion que entro a visitar la pagina 

document.getElementById("ip").addEventListener("scroll", obtenerIP);

//funcion que hace uso de la API https://ipwhois.io/
function obtenerIP(){
var ip  // declaro laq variable que va a contener la IP actual
var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var ipwhois = JSON.parse(this.responseText);
		console.log(ipwhois.country + ' ' + ipwhois.flag.emoji); // Output: United States 🇺🇸
        alert("pais de donde se visita la pagina"+ipwhois.country)
    }
};
XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
XMLHttp.send();
return true;
}