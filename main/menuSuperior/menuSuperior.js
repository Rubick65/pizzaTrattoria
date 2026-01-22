let header = document.getElementById("header"); //Header a añadir el menu
const tituloBotones = ["Menus","Entrantes","Pizzas","Bebidas","Postres"]; //Botones a añadir
let botonSeleccionado = null; // Guarda el boton actualmente activo


/**
 * Funcion para crear boton segun el texto que le pases
 * @param texto texto a escribir
 * @returns {*|jQuery} devuelve el div para su futuro uso
 */
function crearBoton(texto) {

    //Creamos div que contiene al boton
    let $div = $("<div>").addClass("botones");

    //Creamos el boton
    let boton = document.createElement("input");
    boton.type = "button";
    boton.value = texto;

    //Evento para cuando le des click se añada a la clase seleccionado
    boton.addEventListener('click', () => {

        //Si ya hay un botón seleccionado, lo quitamos
        if( botonSeleccionado && botonSeleccionado !== boton) {
            botonSeleccionado.classList.remove('selected');
        }

        // Marcamos este botón como seleccionado
        boton.classList.add('selected');
        botonSeleccionado = boton;
    });

    div.appendChild(boton);

    //Se añade al div y se devuelve
    $div.append($boton);
    return $div;
}

/**
 * Funcion para crear el menu segun la cantidad de botones
 */
function crearMenu() {
    //Se obtiene el header
    let $header = $("#header");

    //Creamos el contenedor de los botones
    let $menu = $("<div>").addClass("menu");

    //Por cada tituloBoton encontrado, se crea un boton y se añade al div
    tituloBotones.forEach(function (titulo) {
        $menu.append(crearBoton(titulo));
    });

    //El header lo obtiene ya creado todo.
    $header.append($menu);
}

//Lo pruebo :)
crearMenu();
