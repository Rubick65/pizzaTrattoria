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
        //Se reinicia la animacion
        $boton.css("animation", "none");
        void $boton[0].offsetWidth;
        $boton.css("animation", "punchQuick 0.25s ease");

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

