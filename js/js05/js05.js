console.log("Holi: Sesión JS05");


//Operador de asignación (=)

let estadoDiminutoDeMexico = "Tlaxcala";

{
    let espaniol = ingles = rumano = turco = vasco = chino = true;
    //japones = true; // variable no declarada
    //let japones = true; let cholo = false;
}


console.log("Francisco habla inglés = "  + ingles);
console.log("Francisco habla rumano =" + rumano);
console.log("Francisco habla turco ="  + turco);
console.log("Francisco habla vasco =" + vasco);
console.log("Francisco habla chino ="  + chino);
//console.log("Francisco habla español ="  + espaniol); MARCA error, eestá fuera del scope
//si lo pongo al final ya lo llee

//no puedo leer esa variable por que esta fuera del ambito de la variable
// let nombreVariable   let espaniol = .. a espaniol le estaria asignando todos los otros valores 

// si no le pongo yna palavra clave  me la da como var


//operadores aritméticos
//multiplicación

let metrosCuadrados = 10 * 30; // 300

//Tenemos dos terrenos
//metrosCuadrados = metrosCuadrados * 2; 

//Operadores simplificados
metrosCuadrados *= 2; //600

//Divisón 
//dividimos el terreno entre 3 

metrosCuadrados /= 3; //200

console.log("metros cuadrados de 3 terrenos " + metrosCuadrados);

//Residuo % 
//Quiero saber si los metros cuadrados son multiplos de 2
let esMultiplo2 = metrosCuadrados % 2 === 0 ? "Sí": "No"; //0 -- Sí
console.log("La cantidad es múltiplo de 2? " + esMultiplo2);

/* 
    Otra opcion pero mejor no, por que está más confusa.

    let esMultiplo2 = metrosCuadrados % 2 ? "No": "Sí";   
    console.log("La cantidad es múltiplo de 2? " + esMultiplo2); *

*/


//Resta - 
let precioM2 =  90000/300;

console.log("El precio por metro cuadrado es de: " + precioM2 + " pesitos");
console.log(`El precio por metro cuadrado es de: ${precioM2} pesitos`);


let precioTerreno = 90000
precioM2 = precioTerreno/300;

let cantidadPagada = 30000;
let cantidadRestante = precioTerreno - cantidadPagada;

console.log(`Cantidad restante $ ${cantidadRestante} pesos`); 

//alt + 96 = ``

//Se bonó $10,000 a la deuda
console.log(`Cantidad restante $ ${cantidadRestante -= 10000} pesos`);

//Suma
//Cobro por generacion de escrituras (8% sobre el costo del terreno)

const costoEscrituras = precioTerreno * 0.08; 
precioTerreno += costoEscrituras;
console.log("Terreno + escrituras $" + precioTerreno); //97200
//console.log("Terreno + escritura $ " + (precioTerreno +=  precioTerreno * 0.08) + "pesos" );


console.log(precioTerreno); 

//Concatenacion de strings
let nombre = "Alan";
    nombre += " García"; // nombre = nombre + "García"
console.log("Nombre persona CH22: " + nombre);

//Operadores de incremento y decremento 
//incrementa o decrementan en una unidad. 

//Preincremento ++ variable, postincremento variable++
//Predecremento -- variable, postdecremento variable--

let numClavosParaMiCasa = 100;

numClavosParaMiCasa++;
console.log("Núm de clavos: " + numClavosParaMiCasa ); // 101

++numClavosParaMiCasa; 
console.log("Núm de clavos: " + numClavosParaMiCasa );// 102

// POST- INCREMENTO
// primero devuelve el valor y luego aumenta en una unidad la variable
console.log("Núm de clavos: " + numClavosParaMiCasa++); //102

// PRE INCREMENO
//Aumenta variable y después nos entrega el valor de la variable
console.log("Núm de clavos: " + ++numClavosParaMiCasa); //104 103 si quito la anterior

//-----------
let respuestasExamen = 95;
//Agregamos punto extra

//console.log("Resultado final: " + respuestaExamen++); //95  al salir queda como 96 
// 95 ..> var =96

respuestaExamen = 82;
/* do {
    console.log("Resultado: " + respuestaExamen); // último valor  101
} while( respuestaExamen++ <= 100) // >

console.log("Resultado final: " + respuestaExamen); // valor impreso 102 */

do {
    console.log("Resultado: " + respuestaExamen); // último valor  101
    //++respuestaExamen o respuesta examen++
} while( ++respuestaExamen <= 100) // >

console.log("Resultado final: " + respuestaExamen); // valor impreso 102

let nivelSuenio = 99;
//if (++nivelSuenio === 100 ) console.log("Me voy a mimir en la sesión"); //
    //100 lee la variable y ahora compara 100 === 100 sale 101

if (nivelSuenio++ === 100 ) console.log("Me voy a mimir en la sesión"); // al salir de la instruccion tiene valoor  de 100
     // 99 llee la variable y dice es 99 ahora lo compoprara 99 === 100 dice que nop entonces se cancela
     //se sale de la instruccion

     console.log("Nivel de sueño: " + nivelSuenio); //100 




//Preincremento
let x = 10;
x = x + 1;
console.log(x); // ++x    x+=1   x= x + x1; 


//Posincremento
let y = 10 
console.log(y); //y++ 
y = y + 1

//--Ejercicio

x = 3;  // 3
y = x++;  // 4        3++ queda en 4 

console.log(`x:${x} y: ${y} `);// 4 y 3

x = 3;   //3
y = ++x; //  cuando llega aqui aumenta 1 y sería 4 
console.log(`x:${x} y: ${y} `); // 4 y 4 



/* 
    Operadores relacionales

        • <= menor o igual
        • >= mayor o igual
        • > mayor que
        • < menor que

*/

let numPerfumes = 10;
if (numPerfumes > 10 ) console.log("Que elegancia la de Francia"); // no lo imprime

if (numPerfumes >= 10 ) console.log("Que elegancia la de Francia"); // si lo imprime

/* 
    Operadores de igualdad

    • == operador igual   evalua valor
    • === esstrictamente igual  valor y tipo de dato
    != diferente que
    !== estrictamente diferente que
*/

let numMatriculaPavel = "1025";

if( numMatriculaPavel == 1025) console.log("Pavel está aprobado"); 
if (numMatriculaPavel === 1025 ) console.log("Pavel está en nivel fase 5");
if (numMatriculaPavel >= 1025 ) console.log("Pavel está en en el CUCEI");


/* 
    Operadores lógicos

    && (AND) || (OR)
    
*/

let numRebosos = 3;
let teGustaReboso = true;

if(numRebosos > 5 || teGustaReboso ) console.log("Te regalo un reboso de Oaxaca");
      //False          True                              true

let vivesEnElExtranjero = true;

if(numRebosos > 5 || teGustaReboso && vivesEnElExtranjero) // & es como una suma
    console.log("Te vendo mi reboso en dólares");

//&& y ||  al mismo nivel se le da prioridad al mismo nivel 

if(numRebosos > 0 || teGustaReboso && vivesEnElExtranjero) // & es como una suma
    console.log("Te vendo mi reboso en dólares");

    //Nan = false 


/* 
        OPERADORES DE CORTO CIRCUITO

        OP1 && OP2 
        Si OP1 = true se realiza el resultado de OP2
    
*/

let online = true 
let mensaje = "Estamos en línea";
let respuesta = online && mensaje;
console.log("Respuesta: " + respuesta);

let edadPersona = 18;
    mensaje = "Puede votar";
    console.log("La persona puede votar? " + (edadPersona >=18 && mensaje));
    //                                           
    //da false si no le pongo ( edadpersona...)

    // vale más el + que el &&


    //OP1 || OP3  Si OP1 = true, se realiza el resultado de OP1

    let isOnline = true;
    let isActive = true;

    if( isOnline){
        if (isActive)
        console.log("Estamos in");
    }

    //segunda forma de hacerlo

    if (isOnline && isActive)
    console.log("Estamos in");

    //es más limpio, más común 
    isOnline && isActive && console.log("Estamos in");