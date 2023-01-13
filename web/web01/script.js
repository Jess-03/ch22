const datoUsuario = {nombre: "Jessica", ciudad:"CDMX"};

{
    const datoUsuario = {nombre: "Viridiana", ciudad:"Aguascalientes"};
   // const numPersonas = 49;
    console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`)
    {
        console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`)
    }
}


console.log(`${datoUsuario.nombre} nos saluda de ${datoUsuario.ciudad}`)

//console.log(`En este momento hay ${numPersonas} personas escuchando rolitas de Shakira`)

//if

/* const respuesta = true("¿Te gusta Shakira?");
console.log(respuesta);
let mensaje;

if(respuesta){
    mensaje = "Entonces te pongo: Waka Waka";
}    
    else 
        mensaje = "Entonces te pongo: A Sky Full of Stars";
console.log(mensaje); */

//Operador ternario

/* let teamFrio = confirm("¿Te gusta el frío?"); 
let mensajeTernario = teamFrio ? " hielito" : "ponche";
console.log(`Te voy a servir: ${mensajeTernario}`); */


/* let cantante = `Selena`;
console.log(`Tu reloj es ${ cantante === `Shakira` ? "Rolex": 
                            cantante === `Pique` ? `Casio`: `el sol`}`); */



/* let cantante = `Shakira`;
let marcaReloj;

    if( cantante === 'Shakira' ) marcaReloj = "Rolex";
    else{
        if( cantante === 'Pique') marcaReloj = "Casio"
        else marcaReloj = "el sol";
    }
    console.log(`Tu reloj es ${ marcaReloj}`); */

    /* let nombrePersona = "Shakira";
    let marcaReloj;
    if ( nombrePersona === "Shakira") 
        marcaReloj = "Rolex";
    else if ( cantante === 'Pique') 
        marcaReloj = "Casio";
    else if ( cantante === 'Selena') 
        marcaReloj = "el sol";
    else marcaReloj = "uno de cars"; 
    
    console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);
 */

/* let nombrePersona = "Abril";
let marcaReloj;
if ( nombrePersona === "Shakira") 
    marcaReloj = "Rolex";
else if ( nombrePersona === 'Pique' || nombrePersona === 'Abril') 
    marcaReloj = "Casio";
else if ( nombrePersona === 'Selena') 
    marcaReloj = "el sol";
else 
    marcaReloj = "uno de cars"; 

console.log(`${nombrePersona} tu reloj es ${marcaReloj}`); */

nombrePersona = "Selena";
marcaReloj = "";
switch(nombrePersona){
    case "Shakira":
        marcaReloj = "Rolex";
        break;
    case "Piqué":
    case "Abril":
        marcaReloj = "Casio";
        break;
    case "Selena":
        marcaReloj = "el sol";
        break;
    default:
        marcaReloj = "uno de Cars"
}

console.log(`${nombrePersona} tu reloj es ${ marcaReloj}`);


