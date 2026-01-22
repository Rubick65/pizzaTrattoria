import { tituloBotones } from "./cargarDatosMenu.js";

let $header = $("#header"); // Se carga el header aqui para evitar errores

let $botonActual = null;

/**
 * Funcion para crear los botones del menu
 * @param texto de cada boton
 * @returns {*|jQuery} div a usar
 */
function crearBoton(texto) {
    let $div = $("<div>").addClass("botones");
    let $boton = $("<input>", {
        type: "button",
        value: texto
    });

    $boton.on("mousedown", function () {
        if ($botonActual) {
            $botonActual.removeClass("selected");
        }

        $boton.addClass("selected");
        $botonActual = $boton;
    });

    $div.append($boton);
    return $div;
}

/**
 * Funcion para crear el menu
 */
function crearMenu() {
    let $menu = $("<div>").addClass("menu");

    //Por cada titulo en la lista se crea un boton
    tituloBotones.forEach(titulo => {
        $menu.append(crearBoton(titulo));
    });
    $header.append($menu);
}
//Se crea el menu
crearMenu();