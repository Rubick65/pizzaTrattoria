import {tituloBotones} from "./cargarDatosMenu.js";

let $header = $("#header"); //Header donde ira el menu
let $botonActual = null; //Variable para saber que boton es el actual y asi mantener la imagen

/**
 * Funcion para crear un boton segun su texto, el cual cambie al html
 * del mismo nombre
 * @param texto boton a crear
 * @returns {*|jQuery} div con el boton en su interior
 */
function crearBoton(texto) {
    const $div = $("<div>").addClass("botones");
    const $boton = $("<button>").text(texto);

    //Leemos de la memoria local cual fue el ultimo boton seleccionado
    const botonGuardado = localStorage.getItem("botonSeleccionado");

    //Si el boton guardado en memoria local es el mismo al que estamos creando
    //Al crear la pagina de nuevo
    //Se le añadira la clase selected y se guardara como actual
    if (botonGuardado === texto) {
        $boton.addClass("selected");
        $botonActual = $boton;
    }

    $boton.on("click", () => {

        //Guardamos en memoria local el boton clickeado
        localStorage.setItem("botonSeleccionado", texto);

        //Reiniciamos la animacion al hacer click del css
        $boton.css("animation", "none");
        void $boton[0].offsetWidth;
        $boton.css("animation", "punchQuick 0.25s ease");

        //Le añadimos como seleccionado
        $boton.addClass("selected");

        //Guardamos el botonActual clickeado como boton
        $botonActual = $boton;

        //Cargamos el html con el mismo nombre que el boton
        window.location.href = `${texto}.html`;
    });

    $div.append($boton);
    return $div;
}

/**
 * Creacion del menu superior
 */
function crearMenu() {
    const $menu = $("<div>").addClass("menu");

    //Por cada boton, se crea uno y se añade al menu
    tituloBotones.forEach(titulo => {
        $menu.append(crearBoton(titulo));
    });

    $header.append($menu);
}

//Se crea el menu
crearMenu();

