import {tituloBotones} from "./cargarDatosMenu.js";

let $header = $("#header");
let $botonActual = null;

function crearBoton(texto) {
    const $div = $("<div>").addClass("botones");
    const $boton = $("<button>").text(texto);

    const botonGuardado = localStorage.getItem("botonSeleccionado");

    if (botonGuardado === texto) {
        $boton.addClass("selected");
        $botonActual = $boton;
    }


    $boton.on("click", () => {

        localStorage.setItem("botonSeleccionado", texto);

        $boton.css("animation", "none");
        void $boton[0].offsetWidth;
        $boton.css("animation", "punchQuick 0.25s ease");

        $boton.addClass("selected");
        $botonActual = $boton;

        window.location.href = `${texto}.html`;
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

