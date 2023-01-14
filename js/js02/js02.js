console.log("Sesión JS02");

/*
Funciones declaradas / definidas

    Una característica de las funciones declaradas es que tiene un hoisting (elevación).
    Ya estan en memoria.
   • Definir funcion y luego invocarla
   • Pero también lo puedo poner al reves, ahí se eleva(hoisting). No importa que el llamada este antes de la función.

*/

console.log("El resultado de 5 * 10 = " + multiplica(5 , 10) );

function multiplica( a, b ){
    return a * b;
};  

//; es el final de la expresión

/*
Funciones expresadas

    Las funciones expresadas (function expression) son funciones que son declaradas dentro de la asignación de una variable.

    Éstas funciones pueden ser anónimas (ie no tienen nombre).

    Las funciones expresadas no tienen hoisting. 

    No esta en memoria hasta que se ejecuta? 

*/


//Para utilizar el comentario de una función se debe poner arriba de la función.
//Si le pasamos el cursor en suma se van a poner los comentarios :o
/**
 * 
 * @param {number} a primer operador para sumar
 * @param {number} b primer operador para sumar
 * @returns resultado de a + b
 */

const suma = function ( a, b ){
    const result = a + b;
    return result; // return a + b; 
};

console.log("La sumatoria de 4 + 6 = " + suma( 4, 6 ));


/*
Funciones autoinvocadas
    Las funciones autoinvocadas (selft-invoking functions) son funciones que se ejecutan en su definición. Pueden ser anónimas. 
*/

(function saludo(){
    console.log("Hola me estoy autoinvocando");
})(); 

//los parentesis del final es lo que invoca la función.


/*
Funciones flecha => 

    Una función flecha (arrow function) son similares a las funciones expresadas, pero no requiere la palabra "function". Además si sólo tiene una instruccion y es el retorno, no requiere la instruccion return y las llaves {}.  
    Funciones flecha se utilizan mucho en react.
    No tienen hoisting.
*/ 

const restaExpresada = function ( a , b) {
    return a-b;
}
console.log("La resta de 20 - 2 = " + restaExpresada(20,2));

//Puedo presindir de las llaves y de return por que es una sóla instrucción.


const resta = (a , b) => a - b;
console.log("La resta de 20 - 2 = " + resta(20,2));


//Mas de una instruccion {} y return
const exponente = ( a , b ) => {
    const result = a**b;
    return result;
}
console.log("El número 4^3 = " + exponente(4,3));


//Solo una instrucción 
const exponenteAlCuadrado = ( a ) => a**2;
console.log("El número 4^2 = " + exponenteAlCuadrado(4)); 

//Aqui la variable imprimeSaludo tiene la funcion de que se imprima en pantalla "Holi crayoli"
const imprimeSaludo = () => console.log("Holi crayoli");
imprimeSaludo();

/*
Funciones con parámetros inicializados
*/

function divide( a=1 , b=1 ){
    return a/b;
}

console.log("La división de 3/1 = " + divide(5,2)); 

//si le pongo un valor va a tomar el otro que ya le di de inicio
//Si pongo ambos parametros ahora toma esos.
// Le damos valores por defecto.

/*
Rest Parameters 
    El parametro "rest" nos permite representar una serie de valores indefinidos en los argunmentos como un array.
*/ 

function sumatoriaIndefinida( a , b, ...restoDatos ) {
    let sumatoria = a + b;
    for (let i = 0; i < restoDatos.length; i++) {
         sumatoria += restoDatos[i] //sumatoria = sumatoria + restoDatos[i]; es lo mismo
    }
    return sumatoria;
}

console.log("El resultado de sumar varios números: " + sumatoriaIndefinida(2,3,5,10,11));

//El parametro rest siempre debe ir al final de toodos los parametros. 


/*
Funciones recursivas
    Es una función que se llama así misma.
*/

//Numero y multiplicar por los numeros anteriores 
//Factorial de 0 = 1    --> 0!
// Factorial de 3 = 3 *2 * 1  --> 3!
//Factorial de 5 = 5 * 4 * 3 * 2

function factorialConCicloFor( a ){
    let total = 1 ;
    for (i = 1; i < i<=a; i++) {
        total *=i;     
    }
    return total;
}

console.log("Factorial 3 = " + factorialConCicloFor(3)); // 6
console.log("Factorial 5 = " + factorialConCicloFor(5)); // 120


function factorialConRecursion( a ) {
    if( a < 1 ) return 1;
    return a * factorialConRecursion( a - 1 )
}

console.log("Factorial 3 = " + factorialConRecursion(3)); // 6
console.log("Factorial 5 = " + factorialConRecursion(5)); // 120


//Mando a llamar a la misma funcion y le resto 1


//Función recursiva para saludo
function saludoConRecursion( b ) {
    if( b < 1 ) return 1;
    return saludoConRecursion( b - 1 );
}

console.log(saludoConRecursion(4));


function saludo( cantidad, iteracion=1 ){
    console.log("saludo" + iteracion);
    if( iteracion >= cantidad) 
        return 1;
    return saludo( cantidad, iteracion+1 );
}
saludo(10);