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
    while (opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4") {
        opcion = parseInt(prompt("Que tipo de pintura vamos a usar? (Solo ingresa el número de la opcion): \n 1) Sintetica \n 2) Acrilica \n 3) Latex \n 4) Al Agua"));
    }
    return opcion;
}

const arrayPaderes = [];
const arrayAverturas = [];

let nombre = prompt ("Bienvenido!!! Por favor, ingrese su nombre...").toUpperCase();
let saludo = alert ("Hola " + nombre + ", vamos a calcular cuanta pintura necesitas...");
let pared = prompt ("Comenzamos con la primera Pared? (si / no)").toUpperCase();


while (pared != "SI" && pared != "NO") {
    pared = prompt("Solo responde con si / no. \n Comenzamos con la primer Pared?").toUpperCase();
}

while (pared == "SI") {
    let nombrePared = "Pared"
    let altoPared = parseFloat(prompt("Ingrese el ALTO de la Pared "));
    let anchoPared = parseFloat(prompt("Ingrese el ANCHO de la Pared "));
    let paredResultado = new Medidas (nombrePared, altoPared, anchoPared);
    arrayPaderes.push(paredResultado);



    let puerta = prompt ("Esta pared, tiene una puerta? (si / no)").toUpperCase();
    while (puerta != "SI" && puerta != "NO"){
        puerta = prompt("Solo responde con si / no. \n Esta pared, tiene una puerta?").toUpperCase();
    }
    if (puerta == "SI") {
        let nombrePuerta = "Puerta"
        let altoPuerta = parseFloat(prompt("Ingrese el ALTO de la Puerta "));
        let anchoPuerta = parseFloat(prompt("Ingrese el ANCHO de la Puerta "));
        let puertaResultado = new Medidas (nombrePuerta, altoPuerta, anchoPuerta);
        arrayAverturas.push(puertaResultado);
    } 



    let ventana = prompt ("Esta pared, tiene ventana? (si / no)").toUpperCase();

    while (ventana != "SI" && ventana != "NO") {
        ventana = prompt("Solo responde con si / no. \n Esta pared, tiene Ventanas?").toUpperCase();
    }
        while (ventana != "NO") {
            let nombreVentana = "ventana"
            let altoVentana = parseFloat(prompt("Ingrese el ALTO de la Ventana"));
            let anchoVentana = parseFloat(prompt("Ingrese el ANCHO de la Ventana"));
            let ventanaResultado = new Medidas (nombreVentana, altoVentana, anchoVentana);
            arrayAverturas.push(ventanaResultado);
            ventana = prompt ("Quieres agregar otra Ventana? (si / no)");
            while (ventana != "SI" && ventana != "NO") {
                ventana = prompt("Solo responde con si / no. \n Quieres agregar otra Ventanas?").toUpperCase();
            }
            }
    
    pared = prompt ("Quieres agregar otra Pared? (si / no)").toUpperCase();

    while (pared != "SI" && pared != "NO") {
        pared = prompt("Solo responde con si / no. \n Quieres agregar otra Pared?").toUpperCase();
    }

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
        alert (nombre + ", Usando pintura Sintetica, la cual cubre 8m2 por litro, necesitas " + sintetica + "Lts para los " + m2total + "m2 de superficie a pintar, teniendo en cuenta dos manos de pintura.-");
        break;
    case 2:
        let acrilica = ((m2total/12)*2).toFixed(0)
        alert (nombre + ", Usando pintura Acrilica, la cual cubre 12m2 por litro, necesitas " + acrilica + "Lts para los " + m2total + "m2 de superficie a pintar, teniendo en cuenta dos manos de pintura.-");
        break;
    case 3:
        let latex = ((m2total/4)*2).toFixed(0)
        alert (nombre + ", Usando pintura Latex, la cual cubre 4m2 por litro, necesitas " + latex + "Lts para los " + m2total + "m2 de superficie a pintar, teniendo en cuenta dos manos de pintura.-");
        break;
    case 4:
        let alAgua = ((m2total/7)*2).toFixed(0)
        alert (nombre + ", Usando pintura Al Agua, la cual cubre 7m2 por litro, necesitas " + alAgua + "Lts para los " + m2total + "m2 de superficie a pintar, teniendo en cuenta dos manos de pintura.-");
        break;

    default:
        console.log ("Opcion no valida");
        break;
    }


