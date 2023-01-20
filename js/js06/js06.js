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


/* const encontrarElementoByTagName = () => {
    
    const [,introRef] = document.getElementsByTagName("p") //ahora pongo coma
    console.log(introRef.innerHTML)
    introRef.innerHTML = "Las <strong>quesadillas</strong> van con <em>queso</em>, es un hecho";
    
}

encontrarElementoByTagName (); */

//Funcion que me cambie a azul el estilo de las etiquetas de enfasis <em>

const cambiarColorEm = (nuevoColor) => {
    const elements = document.getElementsByTagName("em")
    for(let element of elements)
        element.style.color = nuevoColor;
        
}

cambiarColorEm("blue");

//objeto referencia
//dato primitivo valor

//Formas de encontrar un elemento

const diferenciaInnerHTMLInnerText = () => {
    const element = document.getElementById("titulo");
    console.log(element.innerHTML);
    console.log(element.innerText);
}
diferenciaInnerHTMLInnerText();

//trae contenido de las etuqetas que etoy llamando incluidos los nodos hijos
//trae etiqueta  y etiquetas hijas
//trae la etiqueta y todo su contenido (otras etiquetas)

const encontrarElementosByClassName = () => {
    const elements = document.getElementsByClassName("subtitulo"); //contiene una coleccion
    for(let element of elements)
        console.log(element.innerHTML);
}
encontrarElementosByClassName();

// El selector universal querySelector 

const encontrarElementoByQuerySelector = () => {
    const element = document.querySelector("em");
    // (".subtitulo")  nos trae el primer nodo
    // quearySelectorAll(".subtitulo") nos trea todos los nodos
    console.log(element?.innerText); 
}

encontrarElementoByQuerySelector();

//si tegngo dos elementos con la misma etiqueta sólo trae el primero

//.class
//#id?
// padre hijo   span > em ("span>em")

const crearElemento = () => {
    const newElement = document.createElement("p");
    newElement.innerHTML = `La Ch22 es bien <strong> chida </strong> por 
    <ul> 
        <li>Diversas</li>
        <li>Amigables</li>
        <li>La ch22 te respalda</li>
        <li>Sin problemas en quesadillas</li>
        <li>aplica: has compitas, no compitas</li>
        <li>Tenemos a Wicho y Pavel</li>
    </ul>
    `;

    document.getElementById("datos-generation").appendChild(newElement);
    document.getElementById("noticias").appendChild(newElement);
}

crearElemento();

