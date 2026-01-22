import { tituloBotones } from "./cargarDatosMenu.js";

let $header = $("#header"); // Se carga el header aqui para evitar errores

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

    //Evento para cambiar color del boton mientras se mantiene presionado
    $boton.on("mousedown", function () {
        $boton.addClass("selected");

        //Una vez se deje de presionar, se resetea el color
        $(document).one("mouseup", function () {
            $boton.removeClass("selected");
        });
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