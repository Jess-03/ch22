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
        i++ post incremento --> primero lee la variable y luego incrementa.
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



//---------Parte 2

/* Regresando al tema de ciclo for 

    *Nota: Para el ciclo for no es necesario indicar:
    el inicio  (let i = 0)
    la comparación (i > 0)
    o la expresión final  (i++) 

*/

let iteracion = 0;  // aquí está el inicio
for ( ; ; ) {
    console.log("valor de i: " + iteracion);
    if (iteracion === 10) break; //aquí está la comparación 
    iteracion++;  // aquí la expresión final
}

/* Break y continue
    • La instruccion break rompe con la iteración
    • La instruccion continue avanza con la sig iteración
*/

for (let i = 0; i <= 10; i++) {
    if (i === 5) break;
    console.log("For con break: " + i);
}

// imprimiría hasta el 4 por que esta contando desde el 0

for (let i = 0; i <= 10; i++) {
    if (i === 11) break;
    console.log("For con break: " + i);  //imprimiría del 0 al 10 
}

//Continue
//no toma en cuenta ese valo, pero continua con el sig número/iteracion
for (let i = 0; i <= 10; i++) {
    if (i === 5) continue;
    console.log("For con continue: " + i); 
} // Va a imprimir: 0, 1 , 2, 3, 4,   6, 7, 8, 9, 10


/* 
    Nota:
    Para los anteriores casos, si no declaro la expresión de inicio,
    es decir, en vez de poner let i = 0 le pongo let i = ""
    empezaría a contar a partir del 1
*/

//-----------------------------------------------

/* Arreglos de dos dimensiones

    • Un arreglo de una dimensión, es una sola fila  [ "", "", "" ]
    •Un arreglo de dos dimensiones sería:
    [ [], [] [] ]   cada uno es una fila []
      0   1  2  -- > índices
*/


const participantes = [
    [ "José"   , "María", "Pedro"],           //CH1  --> Fila 0
    [ "Tania"  , "Javi" , "Andrea", "Santi"], //CH2  --> Fila 1
    [ "Melanie", "Pavel" ]                    //CH3 --> Fila 2
];
//     0          1         2         3   Columna

/* 
    Tip para recordar:  Feliz cumpleaños
                {{{{5}}}}        [Fila] [Columna]
*/
                                                            //[F][C]
console.log("Persona CH3(f2) 2a persona(c1): " + participantes[2][1]);
console.log("Persona CH2(f1) 1a persona(c0): " + participantes[1][0]);
console.log("Persona CH1(f0) 3a persona(c2): " + participantes[0][2]);

//------------------------------------------


/* for (let i = 0; i < participantes.length; i++) {
    console.log(participantes[i]); //Iterando las filas
    for (let j = 0; j < participantes[i].length; j++) {
        console.log(participantes[i][j]);
    }
} */

/*  Mismo caso, pero se renombran las variables:
    • i = fila
    • j = columna
*/

for (let fila = 0; fila < participantes.length; fila++) {
    console.log(participantes[fila]);
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        console.log(participantes[fila][columna]);
    }
}


/*
    Usando break en ciclos anidados
*/

//Dejar de mostrar los nombres cuando se encuentre a Tania.

// 1. Usando una variable bandera
//    let continuarIteraciones = false con eso lo paro

let continuarIteraciones = true;
for (fila = 0 ; fila< participantes.length; fila++){   
        for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
            console.log(`[${fila}][${columna}]`);
            if ( continuarIteraciones)
                console.log("Uso de variable bandera " + participantes[fila][columna] );
            if ( participantes[fila][columna] === "Tania") continuarIteraciones= false;
        }   
}


// 2. Usando break
cicloFila:
for (fila = 0; fila < participantes.length; fila++) {
    cicloColumna :
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        console.log(`[${fila}] [${columna}]`);
        console.log("Uso de break " + participantes[fila][columna]);
        if (participantes[fila][columna] === "Tania") break cicloFila;
    }
}


// 3. Usando continue
for (let fila = 0; fila < participantes.length; fila++) {
    cicloColumna :
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        if (participantes[fila][columna] === "Tania") continue cicloColumna;
        console.log(`[${fila}] [${columna}]`);
        console.log("Uso de continue C " + participantes[fila][columna]);   
    }
} 

cicloFila:
for (let fila = 0 ; fila< participantes.length; fila++){
    cicloColumna:
    for (let columna = 0 ; columna< participantes[fila].length ; columna++ ){
        if ( participantes[fila][columna] === "Tania") continue cicloFila;
        console.log(`[${fila}][${columna}]`);
        console.log("Uso de continue F " + participantes[fila][columna] );
    } 
}


/* Ciclo while

    Sintaxis
        while ( condicion_verdadera) instrucción;
    while ( condicion_verdadera){
        instrucciones;
    } 

*/

//Usando while 

let numIteracion = 0;
while (confirm("Quieres seguir iterando? ")) {
    console.log("Iteracion n. " + numIteracion++);
}

//Ejercicio: Preguntar del 1 al 10 y saber si el número que pensó el usuario es tal.

//OPCION 1 Es mejor, más descriptivo 

let numAdivinar = 1;
while( !confirm(`${numAdivinar} es tu numero?`)) { 
    numAdivinar++;
    if (numAdivinar === 10) break;
}
console.log("Tu número es el: " + numAdivinar); 

/* Notas: 
    •En confirm se le pone un signo de admiración (!) para que cuando le de cancelar, por que ese no es número que pensé, pueda seguir preguntando.
    •Mientras la condicion se cumpla ya no va a continuar, ie si llegua a 10, ahí temina la cuenta. 
*/

//Aquí es preincremento ++numAdivinar y se va de manera indefinida.
/* numAdivinar = 0;
    while( !confirm(`${++numAdivinar} es tu numero?`)); 
    console.log("Tu número es el: " + numAdivinar); */


//-------------------------------------------------

//OPCION 2  Resulta algo enredado
/* let numAdivinar = 1;
    while( !confirm(`${numAdivinar++} es tu numero?`)); 
    console.log("Tu número es el: " + --numAdivinar); */

/*  Notas: 
    •Es importante poner el (;) al final de la sentencia de while por que si se lo quito entra en conflicto, es como si leyera una sola línea y no va a arrojar lo correcto en consola.
    •Está algo enredado por el uso de ++ y --
*/



/*  Ciclo do-while

        Sintáxis
        do {
                instrucciones;
        } while(condición_verdadera);

        Si la condición es vddra se ejecunta un ciclo.
*/

let valor = 0; //va a imprimir del 0 al 4
while( valor < 5 ) {
    console.log("while " + valor);
    valor++;
}
//Si se cumple el valor se ejecuta, si no nop

/* No se cumple valor = 10 
    No va a imprimir nada por que como el valor es de 10 y la condición while es que sea menor a 5, no cumple no se imprime.
*/

//valor = 0   va a imprimir del 0 al 4
valor = 10;  // do while 10
do {
    console.log("do while " + valor); 
    valor++; //importante el incremento si no entraria en loop infinito
} while( valor < 5 );

/* Diferencia entre while y do while
    •while -->  hace primero la evaluación y luego ejecuta el código.
    •do-while  --> ejecuta el código al menos una vez y luego evalúa la expresión
                    fuerza a que se haga un ciclo
*/


/* Metodo FIFO y FIFO

    •FIFO: first input first output --- alimentos fruta reciente vs fruta de más tiempo
                                        sale la fruta con mayor tiempo.
    •LIFO: last in first out 
*/

//USANDO FIFO  1ro en entrar primero en salir
//Agregando una caja de manzana
const alimentosPerecederos = [];
alimentosPerecederos.push("manzanas lunes");
alimentosPerecederos.push("manzanas miércoles"); 

//Sacando manzanas del lunes 
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //lunes 
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //miercoles


//USANDO LIFO  
//Ferretería

//Agregar luces navideñas en diciembre (que sean las primeras en salir)
const productos = ["desarmadores", "cemento"];
productos.push("luces navideñas");                                  
console.log("Sacando a la venta " + productos.pop());// luces navideñas
console.log("Sacando a la venta " + productos.pop()); // cemento
console.log("Sacando a la venta " + productos.pop()); // desarmadores
//otra opcion productos[2]  luces //sacamos ultimo elemento