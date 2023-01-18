console.log("Sesión JS06");

const encontrarElementoById = () => {
    const element = document.getElementById("titulo");
    //console.log("Datos del objeto: ", element);
    console.log("Entre las etiquetas: " + element.innerHTML);
    
    const obtenerNombre = () => prompt("Escribe tu nombre", "Jessica");//nueva parte

    //innerHTML
    //element.innerHTML += "Manipulación del DOM";
    // Puedo agregar nuevas etiquetas con inner
    //const nombreDesarrollador = "Jessica"; //ToDo agregar funcion, pero ya se hizo con obtener nombre
    const nombreDesarrollador = obtenerNombre(); // nueva parte 
    //element.innerHTML += `Manipulacion del <strong>DOM</strong> por ${nombreDesarrollador}`;
    //element.innerHTML +=  `Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em>`;
    //element.innerHTML +=  `<h1>Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em> </h1>`;

    //Para que tambien aparezca JSO6
    element.innerHTML =  `<h1>${element.innerHTML} Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em> </h1>`;
    
}

encontrarElementoById();

//elemento va a tener al objeto de getElementById

//Si utiliamos la coma respeta el tipo de dato


//En plural cuando sea className
/* const encontrarElementoByTagName = () => {
    const elements = document.getElementsByTagName("p")
    
    //Obtenemos el índice 0
    const introRef = elements[0].innerHTML;
    //Modificación de contenido de introRef
    console.log(introRef)
}

encontrarElementoByTagName (); */


const encontrarElementoByTagName = () => {
    
    const [,introRef] = document.getElementsByTagName("p") //ahora pongo coma
    console.log(introRef.innerHTML)
    introRef.innerHTML = "Las <strong>quesadillas</strong> van con <em>queso</em>, es un hecho";
    
}

encontrarElementoByTagName ();

//Funcion que me cambie a azul el estilo de las etiquetas de enfasis <em>

const cambiarColorEm = (nuevoColor) => {
    const elements = document.getElementsByTagName("em")
    for(let element of elements)
        element.style.color = nuevoColor;
        
}

cambiarColorEm("blue");

