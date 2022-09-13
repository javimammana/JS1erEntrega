class Medidas {
    constructor (nombre, alto, ancho) {
        this.nombre = nombre
        this.alto = alto;
        this.ancho = ancho;
        this.metrosCuadrados = alto * ancho;
    }
}

function pintura() {
    let opcion = parseInt(prompt("Que tipo de pintura vamos a usar?: \n 1) Sintetica \n 2) Acrilica \n 3) Latex \n 4) Al Agua"));
    return opcion;
}

const arrayPaderes = [];
const arrayAverturas = [];

let nombre = prompt ("Bienvenido!!! Por favor, ingrese su nombre...");
let saludo = alert ("Hola " + nombre + ", vamos a calcular cuanta pintura necesitas...");
let pared = prompt ("Quieres agregar una Pared? (si / no)")

while (pared != "no") {
    let nombrePared = "Pared"
    let altoPared = parseFloat(prompt("Ingrese el ALTO de la Pared "));
    let anchoPared = parseFloat(prompt("Ingrese el ANCHO de la Pared "));
    let paredResultado = new Medidas (nombrePared, altoPared, anchoPared);
    arrayPaderes.push(paredResultado);

    let puerta = prompt ("Esta pared, tiene una puerta? (si / no)");
    while (puerta != "si" && puerta != "no"){
        puerta = prompt("Solo responde con si / no. \n Esta pared, tiene una puerta?")
    }
    if (puerta == "si") {
        let nombrePuerta = "Puerta"
        let altoPuerta = parseFloat(prompt("Ingrese el ALTO de la Puerta "));
        let anchoPuerta = parseFloat(prompt("Ingrese el ANCHO de la Puerta "));
        let puertaResultado = new Medidas (nombrePuerta, altoPuerta, anchoPuerta);
        arrayAverturas.push(puertaResultado);
    } 

    let ventana = prompt ("Esta pared, tiene ventana? (si / no)");
    while (ventana != "no") {
        let nombreVentana = "ventana"
        let altoVentana = parseFloat(prompt("Ingrese el ALTO de la Ventana"));
        let anchoVentana = parseFloat(prompt("Ingrese el ANCHO de la Ventana"));
        let ventanaResultado = new Medidas (nombreVentana, altoVentana, anchoVentana);
        arrayAverturas.push(ventanaResultado);
        ventana = prompt ("Quieres agregar otra Ventana? (si / no)");
        }

        
    pared = prompt ("Quieres agregar otra Pared? (si / no)")
    }

const m2parede = arrayPaderes.reduce ((acumulador, elemento) => acumulador + elemento.metrosCuadrados, 0);
const m2averturas = arrayAverturas.reduce ((acumulador, elemento) => acumulador + elemento.metrosCuadrados, 0);

const m2total = (m2parede - m2averturas);

let opcion = pintura();

console.log(arrayPaderes);
console.log(arrayAverturas);
console.log("el total de metros cuadrados de las paredes es de " + m2parede +"M2");
console.log("Tenes " + m2averturas + "m2 de averturas en Total.");
console.log(nombre + ", Tu superfice a cubrir con pintura es de " + m2total +"m2");
console.log("tipo de pintura " + opcion);

switch (opcion) {

    case 1:
        let sintetica = ((m2total/8)*2).toFixed(0)
        console.log ("Usando pintura Sintetica (cubre 8m2 por litro), Necesitas " + sintetica + "Lts de Pintura, dando dos manos de pintura, para los " + m2total + "m2 de superficie a pintar.-");
        break;
    case 2:
        let acrilica = ((m2total/12)*2).toFixed(0)
        console.log ("Usando pintura Acrilica (cubre 12m2 por litro), Necesitas " + acrilica + "Lts de Pintura, dando dos manos de pintura, para los " + m2total + "m2 de superficie a pintar.-");
        break;
    case 3:
        let latex = ((m2total/4)*2).toFixed(0)
        console.log ("Usando pintura Latex (cubre 4m2 por litro), Necesitas " + latex + "Lts de Pintura, dando dos manos de pintura, para los " + m2total + "m2 de superficie a pintar.-");
        break;
    case 4:
        let alAgua = ((m2total/7)*2).toFixed(0)
        console.log ("Usando pintura Al Agua (cubre 7m2 por litro), Necesitas " + alAgua + "Lts de Pintura, dando dos manos de pintura, para los " + m2total + "m2 de superficie a pintar.-");    
        break;

    default:
        console.log ("Opcion no valida");
        break;
    }


