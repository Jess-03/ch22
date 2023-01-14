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
armasCh22[ armasCh22.length ] = "macana"
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
    armasCh22.forEach( (elemento, indice) => console.log(` ArrowFunct ${indice} tiene ${elemento}`))


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

    for( let i = armasCh22.length -1; i>=0 ; i--) 
    console.log("Arma: " + armasCh22[i]);

