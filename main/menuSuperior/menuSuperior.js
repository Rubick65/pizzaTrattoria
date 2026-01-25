import { tituloBotones } from "./cargarDatosMenu.js";

let $header = $("#header");
let $botonActual = null;

function crearBoton(texto) {
    const $div = $("<div>").addClass("botones");
    const $boton = $("<button>").text(texto);

    $boton.on("click", () => {
        if ($botonActual) {
            $botonActual.removeClass("selected");
        }

        $boton.addClass("selected");
        $botonActual = $boton;
    });

    $div.append($boton);
    return $div;
}

function crearMenu() {
    const $menu = $("<div>").addClass("menu");

    tituloBotones.forEach(titulo => {
        $menu.append(crearBoton(titulo));
    });

    $header.append($menu);
}

crearMenu();

