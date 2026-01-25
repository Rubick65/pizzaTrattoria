import { opciones } from "./cargarDatosPieDePagina.js";

let $footer = $("#footer");

function crearBoton(opcion) {
    var $divOpciones = $("<div>").addClass("footer-opcion");
    var $divSubOpciones = $("<div>").addClass("footer-subopciones invisible");
    var $boton = $("<button>").addClass("footer-boton").text(opcion.nombreOpcion);

    opcion.listaSubOpciones.forEach(subOpcion => {
        $divSubOpciones.append(
            $("<div>").addClass("footer-subopcion").text(subOpcion)
        );
    });

    $boton.on("click", () => {
        $divSubOpciones.toggleClass("invisible");
        $boton.toggleClass("activo");
    });

    $divOpciones.append($boton,$divSubOpciones);

    return $divOpciones;
}

function crearMenu() {
    var $menu = $("<div>").addClass("footer-menu");
    opciones.forEach(opcion => {
        $menu.append(crearBoton(opcion));
    });
    $footer.append($menu);
}

crearMenu();