//Declaración de bloque. Lo que va entre llaves {}
const datoUsuario = {nombre: "Jessica", ciudad:"CDMX"};

{
    // Esto es una declaración en bloque
    // en donde las variables declaradas(let, const)
    // sólo tendran alcance dentro del bloque o
    // bloque anidados dentro del bloque.
    const datoUsuario = {nombre: "Wicho", ciudad:"Aguascalientes"};
    const numPersonas = 49;
    console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`)
    {
        console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`)
    }
}

console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`)
//La variable numPersonas no está definida. 
//console.log(`En este momento hay ${numPersonas} personas escuchando rolitas de Shakira`);

// Scople de la variable
//var es global
//let y const son locales

//Condicional If 
/*
    Sintáxis
    if( condiciónVerdadera ) instrucción;

    if( condiciónVerdadera ) instrucción;
        else (instruccion en caso contrario)

    if( condiciónVerdadera ) {
        instrucciones;
    }
*/


const respuesta = true;// confirm("¿Te gusta Shakira?");
console.log(respuesta);
let mensaje = "Me gusta Ruelle";

if(respuesta){
    mensaje = "Entonces te pongo Waka Waka";
    //mensaje = "Eres fan de Antología";
}    
    else 
        mensaje = "Entonces te pongo Su Chambelán";
console.log(mensaje);

//el let dentro de if no deberia existir
// no debería haber dos mensajes sólo uno
//let mensaje = Ruelle; no tengo por que poner un texto, solo tengo que declarar la variable 
//Hace nuestro código bien, que no nos confunda.


//Operador ternario.

/*
 En condicones cortas, un if chiquito.
    Sintaxis        if                       else
    condición ? condición_verdadera : condición_ falsa;
*/

//let teamFrio = confirm("¿Te gusta el frío?"); 
//let mensajeTernario = teamFrio ? "Entonces te mando hielito" : "Te mando ponche";
//console.log(`Te voy a servir: ${mensajeTernario}`);
//console.log(`Te voy a servir: ${ teamFrio ? "hielito":"Ponche"}`)

let cantante = "Piqué";
//console.log(`Tu reloj es ${ cantante === `Shakira` ? "Rolex": "Casio"}`);

//anidado
console.log(`Tu reloj es ${ cantante === `Shakira` ? "Rolex": 
    cantante === "Piqué" ? "Casio": "el sol"}`);


//Lo mismo pero de otra forma
/*
    let marcaReloj;
    if( cantante === 'Shakira' ) marcaReloj = "Rolex";
    else{
        if( cantante === 'Pique') marcaReloj = "Casio"
        else marcaReloj = "el sol";
    }
    console.log(`Tu reloj es ${ marcaReloj})
*/

let nombrePersona = "Shakira";
let marcaReloj;
if ( nombrePersona === "Shakira") 
    marcaReloj = "Rolex";
else if ( cantante === 'Pique') 
    marcaReloj = "Casio";
else if ( cantante === 'Sergio') 
    marcaReloj = "el sol";
else marcaReloj = "uno de cars"; 

console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);


//Operador lógico && and  y  || or

/*
AND 

*/

/*
let nombrePersona = "Shakira";
let marcaReloj;
if ( nombrePersona === "Shakira") 
    marcaReloj = "Rolex";
else if ( nombrePersona === 'Pique' || nombrePersona === 'Karla') 
    marcaReloj = "Casio";
else if ( nombrePersona === 'Sergio') 
    marcaReloj = "el sol";
else 
    marcaReloj = "uno de cars"; 

console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);
*/

//Se le da prioridad a AND sobre OR

/*
    Condicional Switch
        Sintáxis:
            switch(expresion){
                case valor1:
                    instrucciones; 
                    break;
                caso valor2:
                    instrucciones; 
                    break;
                caso n:
                    intrucciones;
                    break;
                default
            }
break sino conituna leyendo las otras instrucciones
*/

nombrePersona = "Sergio";
marcaReloj = "";
switch(nombrePersona){
    case "Shakira":
        marcaReloj = "Rolex";
        break;
    case "Piqué":
    case "Karla":
        marcaReloj = "Casio";
        break;
    case "Sergio":
        marcaReloj = "El sol";
        break;
    default:
        marcaReloj = "uno de Cars"
}

console.log(`Switch - ${nombrePersona} tu reloj es ${ marcaReloj}`);


//Preguntar el # del mes del 1 al 12
//De acuerdo al mes indicado desplegar en consola
//La estacion del año:
/*
mes 12 1 2 =Invierno
mes 12 1 2 =Primavera
mes 12 1 2 =Verano
mes 12 1 2 =Otoño
switch

8


*/


let estacion = prompt("Que estación del año es el mes:"); 

let numMes = "";
switch(estacion){
    case "1":
    case "2":
    case "12":
        estacion = "Invierno";
        break;
    case "3":
    case "4":
    case "5":
        estacion = "Primavera";
        break;
    case "6":
    case "7":
    case "8":
        estacion = "Verano";
        break;
    case "9":
    case "10":
    case "11":
        estacion = "Otoño";
        break;
    default:
        estacion = "Nom puedem serm no existe ese mes."
}

console.log(`En el mes ${numMes} la estación del año es: ${estacion}`);

