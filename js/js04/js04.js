console.log("Sesión js04");

/* Arrays
    • Nombre de variable en plural
    • Se recomienda declarar los arrays (que son objetos) con const, para prevenir que se cambie el tipo de dato.
    • Existen dos manera de escribir un array: [ ] y con ( ).
    • Un arreglo es un tipo de dato "object"; es mutable.
 */

//1. Más comun, con [ ]
const nombresCh22 = ["Manuel", "Leornardo", "Melani"];

//2. Constructor del array ()
const nombresCh14 = new Array("Abue", "Cori", "Maga", "Sebas");

console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];
console.log(promedioEdadesCh22); // [25]  

//En línea va a generar un arreglo de 24 elementos.
const promedioEdadesCh14 = new Array(24);
console.log(promedioEdadesCh14); // [,,,,,.....,,,,,]  


//Conocer la longitud de un arreglo: .length

console.log(`Num de elementos ${promedioEdadesCh22.length}`); //length: 1
console.log(`Num de elementos ${promedioEdadesCh14.length}`); //length: 24

//-------------------------------------------------------

/* Declarar variables con const y let
    const armasCh22 = ["manoplas", "picahielo"]; 
    typeof(armasCh22) ---> object

    Si a la variable "armasCh22" le asigno un nuevo valor, marcaría error por que el nuevo dato se le está asignando a una variable constante, y por ser este tipo de variable no se pueden reasignar los valores dados.
    x armasCh22 = "filero";

    En cambio si la variable la declaro con let, sí podría cambiar el valor. 
    let armas = "filero";
        armas = "navaja"
    typeof(armas) ---> string 
*/

const armasCh22 = ["manoplas", "picahielo"];
console.log("Lista de armas: " + armasCh22);

//Leer un elemento del arreglo

console.log(`Jessica tiene un ${armasCh22[1]}`);
console.log(`Leornardo tiene unas ${armasCh22[0]}`);

//Cambiar un dato del arreglo

armasCh22[0] = "Cuchillo";
console.log(`Leornardo tiene un ${armasCh22[0]}`);
console.log(armasCh22);

//Los objetos son datos mutables 

let nombreClica = "Los Wichales";

nombreClica[0] = "T"; // No cambia la letra L por la T por que un string es un dato primitivo, que es inmuntable. Si quisiera cambiar el nombre por "Tos Wichales" reasignaría la variable.
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);

nombreClica = "The wichales"; // aqui se reasigno la variable y por lo tanto ya no tiene el valor de "Los Wichales"
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);


//Agregar un dato al final.

//Tres formas de agregar un elemento al final
armasCh22[2] = "machete";
armasCh22[armasCh22.length] = "macana"
armasCh22.push("cadena", "bat"); //se puede agregar más de un elemento con las propiedades.

/*Notas:
    •No puedo agregar un dato escribiendo de nuevo el arreglo + el nuevo dato.
       const armasCh22 = ["cuchillo", "picahielo"]; 
     x const armasCh22 = ["cuchillo", "picahielo" "machete"]; --> da error por que le estaría reasignando los datos y no puedo hacer eso.

    •Si pongo en el índice 5 aparecería: ["cuchillo", "picahielo" , , , , "machete"];
     armasCh22[5] = "machete";  
*/


//Agregar un elemento al inicio
armasCh22.unshift("navaja", "desarmador");
console.log("Actualización de armas: " + armasCh22);

/* Ciclo For

    Sintaxis 
        for (instrucción Inicio; comparación; expresión final) {
            instrucción
        } 
        
        for (let i = 0; i <=0 ; i++) {
            instrucciones;
        }
    
        i = iteration 
        ++i preincremento --> primero incrementa y luego se lee la variable.
        i++ incremento --> primero lee la variable y luego incrementa.
*/


for (let i = 0; i < armasCh22.length; ++i)
    console.log(`Indice ${i} tiene ${armasCh22[i]}`);
//console.log(armasCh22[i]);


//forEach (callbackFunction)

function iterarArreglo(elemento, indice, arreglo) {
    console.log(` Callback - Indice ${indice} tiene ${elemento}`);
}
// variable.forEach(callbackFunction)
armasCh22.forEach(iterarArreglo); //lamada a una funcion de callback

//Otro ejemplo:  iterarArreglo("Yo merengues", 4 ); //invocando funcion 
//Con función flecha =>
armasCh22.forEach((elemento, indice) => console.log(` ArrowFunct ${indice} tiene ${elemento}`))


/* For in 
    • Va a iterar los indices del arreglo
    • let singular in plural
          arma --- armasCH22
*/

for (let arma in armasCh22)
    console.log(` ForIn ${arma} tiene ${armasCh22[arma]} `);
//console.log(` ForIn arma: ${arma}`); indice


/*For Of
    • Va a iterar los elementos del arreglo
*/

for (let arma of armasCh22)
    console.log(` ForOf arma: ${arma}`);


//Ejercicio: iterar de forma descendente las armas 

for (let i = armasCh22.length - 1; i >= 0; i--)
    console.log("Arma: " + armasCh22[i]);

// Para el ciclo for no es necesario indicar el inicio,
//la comparacion, o la expresion final 

//ATENCION 

//1. Puedo no poner la expresion uniciol


//variable b
let iteracion = 0;
for (; ; iteracion++) {
    console.log("valor de i" + iteracion);
    if (iteracion === 10) break;
    iteracion++;
}

//al no tener una comparacion lo pondríamos abajo en i === 10

/*
La instruccion break rompe cn la iteracion
La instruccion continue continua con la sig iteración
*/

for (let i = 0; i <= 10; i++) {
    if (i === 5) break;
    console.log("For con break: " + i);
}

// imprimiria hasta el 4 por que esta contando desde el 0

for (let i = 0; i <= 10; i++) {
    if (i === 11) break;
    console.log("For con break: " + i);
}

//imprimiría del 0 al 10 

for (let i = 0; i <= 10; i++) {
    //no toma en cuenta ese, pero continua con el sig numero/iteracion
    if (i === 5) continue;
    console.log("For con continue: " + i);
}

// o, 1 2 3 4  6 7 8 9 10

//Paara los anteriores caso si no le pongo un valor de inicio ie 
// let i = 0 osea let i="" empezaría a partir del 1


/*
Arreglos de dos dimensiones

una dimension es una sola fila  [ "", "", "" ]

De dos dimensiones sería:
[ [], [] [] ]   cada uno es una fila []
  0   1  2  -- > índices


*/


const participantes = [
    ["José", "María", "Pedro"],   //CH1   --> Fila 1
    ["Tania", "Javi", "Andrea", "Santi"], //CH2  --> Fila2
    ["Melanie", "Pavel"] // CH3 --> Fila 3
];

// Columna:
//    0            1         2         3

//Feliz    cumpleaños 
// [Fila] [Columna]

console.log("Persona CH3(f2) 2a persona(c1): " + participantes[2][1]);
console.log("Persona CH2(f1) 1a persona(c0): " + participantes[1][0]);
console.log("Persona CH2(f0) 3a persona(c2): " + participantes[0][2]);

/* ------------------------------------------
 for (let i = 0; i < participantes.length; i++) {
    console.log(participantes[i]); //iterando las filas
    for (let j = 0; j < participantes[i].length; j++) {
        console.log(participantes[i][j]);
    }
}


// se pone i y j

// i=fila
// j= columna

//[i] nos entrega la fila entrega

for (let fila = 0; fila < participantes.length; fila++) {
    console.log(participantes[fila]); //iterando las filas
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        console.log(participantes[fila][columna]);
    }
}


//Usando break en ciclos anidados
/*
Dejar de mostrar los nombres, cuando se encuentre a Tan
*/


//Sin break:

// let continuarIteraciones = true;

// for (fila = 0; fila < participantes.length; fila++) {
//     if (continuarIteraciones) {
//         for (let columna = 0; columna < participantes[fila].length; columna++) {
//             if(continuarIteraciones)
//             console.log("Uso de break: " + participantes[fila][columna]);
//             if (participantes[fila][columna] === "Tan") continuarIteraciones= false;
//         }
//     }

// }

// //Usando una variable como bandera
//  let continuarIteraciones = true;
//  for (let fila = 0; fila < participantes.length; fila++) {
//     for (let columna = 0; columna < participantes[fila].length; columna++) {
//          console.log(`[${fila}] [${columna}]`);
//          if (continuarIteraciones)
//             console.log("No se usa break, pero si bandera: " + participantes[fila][columna]);
//          if (participantes[fila][columna] === "Tan") continuarIteraciones = false;
//     }

// }


// //Usando break
// cicloFila:
// for (fila = 0; fila < participantes.length; fila++) {
//     cicloColumna :
//     for (let columna = 0; columna < participantes[fila].length; columna++) {
//         console.log(`[${fila}] [${columna}]`);
//         console.log("Uso de break " + participantes[fila][columna]);
//         if (participantes[fila][columna] === "Tan") break cicloFila;
//     }
// }

// //Usando continue
// for (let fila = 0; fila < participantes.length; fila++) {
//     cicloColumna :
//     for (let columna = 0; columna < participantes[fila].length; columna++) {
//         if (participantes[fila][columna] === "Tan") continue cicloColumna;
//         console.log(`[${fila}] [${columna}]`);
//         console.log("Uso de continue " + participantes[fila][columna]);   
//     }
// }

//tambien con cicloFila

//------------------------------------

//CODIGO SERGIO
for (fila = 0 ; fila< participantes.length; fila++){
    console.log(participantes[fila]); //Iterando las filas
    for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
        console.log( participantes[fila][columna] );
    }
}

// Usando break en ciclos aninados
// Dejar de mostrar los nombre, cuando se encuentre a Tan

//Usando una variable como bandera
let continuarIteraciones = true;
for (fila = 0 ; fila< participantes.length; fila++){   
        for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
            console.log(`[${fila}][${columna}]`);
            if ( continuarIteraciones)
                console.log("Uso de break " + participantes[fila][columna] );
            if ( participantes[fila][columna] === "Tan") continuarIteraciones= false;
        }   
}

//Usando Break
clicloFila:
for (let fila = 0 ; fila< participantes.length; fila++){
    cicloColumna:
    for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){
        console.log(`[${fila}][${columna}]`);
        console.log("Uso de break " + participantes[fila][columna] );
        if ( participantes[fila][columna] === "Tan") break clicloFila;
    } 
}

//Usando continue
clicloFila:
for (let fila = 0 ; fila< participantes.length; fila++){
    cicloColumna:
    for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){
        if ( participantes[fila][columna] === "Javi") continue clicloFila;
        console.log(`[${fila}][${columna}]`);
        console.log("Uso de continue " + participantes[fila][columna] );
    } 
}


//Usando while

/*

    Sintaxis





*/

/* let numIteracion = 0;
while (confirm("Quieres seguir iterando? ")) {
    console.log("Iteracion n. " + numIteracion++);
} */

//Ejercicio: Preguntar del 1 al 10 y saber si el número que pensó el usuario es tal.

//Se le pone un signo de admiracion ! para que cuando le de cancelar continue

//OPCION 1 Es mejor, más descriptivo 
/* let numAdivinar = 1;
while( !confirm(`${numAdivinar} es tu numero?`)) { 
    numAdivinar++;
    //if (numAdivinar === 10) break;
}
console.log("Tu número es el: " + numAdivinar); */
//Mientras la condicion se cumpla ya no va a continuar, o algo asi

//OPCION 2  Resulta algo enredado
/* let numAdivinar = 1;
while( !confirm(`${numAdivinar++} es tu numero?`)); 
// importante poner el (;) de arriba AHH!! Si se lo quito entro en conflicto, es como si leyera una sola línea
console.log("Tu número es el: " + --numAdivinar); */

//postincremento primero leemos el valor y luego aumentamos la variable 

// O que se cambia , uso de preincremento

let numAdivinar = 0;
while( !confirm(`${++numAdivinar} es tu numero?`)); 
console.log("Tu número es el: " + numAdivinar);

/*  Ciclo do-while

        Sintáxis
           do {
                instrucciones;
           } while(condición_verdadera),

            Si la condición es vddra se ejecunta un ciclo.
*/

let valor = 10;
while( valor < 5 ) {
    console.log("while " + valor);  // o... 4  // nada 
    valor++;
}
//Si se cumple el valor se ejecuta, si no nop


valor = 10;
do {
    console.log("do while " + valor); // 0 al 4  //   10
    valor++; //importante el incremento si no entraria en loop infinito
} while( valor < 5 );

//Diferencia entre while y do while es que en do while fuerza a que se haga un ciclo


/* 
   •FIFO: first input first output --- alimentos Verduna nueva vs verdura de mas tiempo, ps saca el más viejo
   •LIFO: last in first out 



*/

const alimentosPerecederos = [];

//Agregando una caja

//USANDO FIFO  1ro en entrar primero en salir
alimentosPerecederos.push("manzanas lunes");
alimentosPerecederos.push("manzanas miércoles"); 

//Sacando manzanas del lunes 
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //lUNES
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //Miercoles


//USANDO LIFO  
//Ferretería
const productos = ["desarmadores", "cemento"];

//Agregar lices navideñas en diciembre
productos.push("luces navideñas");                                  // primero en salir 
console.log("Sacando a la venta " + productos.pop()); //otra opcion productos[2]  luces //sacamos ultimo elemt
console.log("Sacando a la venta " + productos.pop()); // cemento
console.log("Sacando a la venta " + productos.pop()); // desarmadores


