let header = document.getElementById("header"); //Header a añadir el menu
const tituloBotones = ["Menus","Entrantes","Pizzas","Bebidas","Postres"]; //Botones a añadir

/**
 * Creacion de boton para el menu segun el texto
 * @param texto texto del boton
 * @returns {HTMLDivElement} se devuelve el div creado
 */
function crearBoton(texto) {

    //Creamos el div que rodeara al boton
    let div = document.createElement("div");
    div.className = "botones";

    //Creamos el boton
    let boton = document.createElement("input");
    boton.type = "button";
    boton.value = texto;

    div.appendChild(boton);

    //Se devuelve para su futuro uso
    return div;
}

/**
 * Funcion para crear el menu segun la cantidad de botones que vaya a ver.
 */
function crearMenu(){

    //Se crea el div que contendra todo los botones
    let div = document.createElement("div");
    div.className = "menu";

    //Por cada boton, se añade al div
    tituloBotones.forEach(titulo => {
        div.appendChild(crearBoton(titulo));
    });

    //Finalmente se añade al header
    header.appendChild(div);
}

//Lo creo para probarlo, Ruben Martin Perraco.
crearMenu();