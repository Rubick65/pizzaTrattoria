import { opciones } from "./cargarDatosPieDePagina.js";

let $footer = $("#footer"); //Footer donde ira el menu

/**
 * Funcion para crear el boton que mostrara todas las subOpciones
 * @param opcion opcion a crear
 * @returns {*|jQuery} devuelve el div con los botones contenidos
 */
function crearBoton(opcion) {
    var $divOpciones = $("<div>").addClass("footer-opcion");

    //Se crean las subOpciones pero estan invisibles por defecto
    var $divSubOpciones = $("<div>").addClass("footer-subopciones invisible");
    var $boton = $("<button>").addClass("footer-boton").text(opcion.nombreOpcion);

    //Por cada subOpcion, Se añadira un div al contenedor
    opcion.listaSubOpciones.forEach(subOpcion => {
        $divSubOpciones.append(
            $("<div>").addClass("footer-subopcion").text(subOpcion)
        );
    });

    //Evento que modifica la clase del contenedor de subOpciones
    //Para alterar entre invisible y activo

    $boton.on("click", () => {
        $divSubOpciones.toggleClass("invisible"); //Se añade o se quita
        $boton.toggleClass("activo");
    });

    $divOpciones.append($boton,$divSubOpciones);

    return $divOpciones;
}

/**
 * Funcion para crear el menu inferior
 */
function crearMenu() {
    var $menu = $("<div>").addClass("footer-menu");

    //Por cada opcion, se crea un boton con sus subOpciones
    opciones.forEach(opcion => {
        $menu.append(crearBoton(opcion));
    });
    $footer.append($menu);
}

//Se crea el menu
crearMenu();