console.log("Sesión JS01");

/*son 7 datos primitivos de  JavaScript
    -String ( "Hola mundo")
    -Number  ( 2023 )
        Los números utilizan 64 bits para almacenarlo pero, sólo se usan "53 casillas"  bits para representar el número.
    -BigInt  (1800n )  al final lleva una n   * solo numeros enteros
        let bigInt = BigInt( maxNumber); convertir de number a bigInt 
        bigInt + 1n   =  sumar 
    -Boolean
    -Undefined
        Un dato no se define el tipo de dato, sólo se declara. --> se asigna?
    -Null
        Intencionalmente se borra el tipo de dato. El tipo de dato sea de ningún tipo jsjsj 
    -Symbol

Tipos de datos object:
    - Object
        let myObject = {}; 
        recomendable que se definan con const*
    -Array
        const myArray = []

Funciones

*/


let myObject = {clave: "valor", edad: 18, 5:5};
console.log( myObject.edad );  // opción 1   si es especifico y dato no va a cambia ps esta op o algo así
console.log( myObject ['edad']); // op 2  
console.log(myObject['5']);


// const propiedad = 'edad';
// console.log( myObject.edad ['propiedad']);


//Conversiones de datos: de string a number 

/*
    parseInt
    parseFloat

*/

//Conversiones de datos number a string
//(1025).toString();