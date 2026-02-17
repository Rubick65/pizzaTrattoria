import {crearContenedorComida} from "./ContenedorComida.js";
import {pizzas, entrantes} from "../DataSource/cargarDatos.js";

/**
 * Crea una lista de comidas con un carrusel que permite deslizarse por varios elementos
 * @param listaComida Lista de comida ha crear en el carrusel
 * @return {*|jQuery} Devuelve el contenedor con el carrusel creado
 */
export function crearListaComida(listaComida) {

    // Envuelve todo el carrusel
    const wrapper = $("<div>").addClass("carrusel-wrapper");

    // Carrusel de comidas
    const carruselComida = $("<div>").attr("id", "carruselComida");

    // Crea el botón anterior del carrusel
    const botonIzquierdo = $("<button>")
        .addClass("botonCarrusel")
        .attr("id", "anterior");

    // Crea el botón siguiente del carrusel
    const botonDerecho = $("<button>")
        .addClass("botonCarrusel")
        .attr("id", "siguiente");

    // Crea la pista para las pizzas dentro del carrusel
    const pista = $("<div>").addClass("carrusel-pista");

    // Recorremos la lista de comida
    listaComida.forEach((comida) => {
        // Vamos añadiendo cada contenedor a la pista
        pista.append(crearContenedorComida(comida));
    });

    // Se añade el botón anterior
    carruselComida.append(botonIzquierdo);
    // Luego la pista
    carruselComida.append(pista);
    // Y por último el botón siguiente
    carruselComida.append(botonDerecho);

    // Se añade el carrusel al wrapper
    wrapper.append(carruselComida);

    // Posición inicial del carrusel
    let posicion = 0;
    // Ancho del desplazamiento
    const anchoDesplazamiento = 300;

    // Cuando se da click en el botón siguiente
    botonDerecho.on("click", function () {
        // Se calcula el límite
        const limite = (listaComida.length - 3) * anchoDesplazamiento;
        // Y si la posición absoluta es menor que el límite
        if (Math.abs(posicion) < limite) {
            // Se actualiza la posición
            posicion -= anchoDesplazamiento;
            // Y se transofrma con css
            pista.css("transform", `translateX(${posicion}px)`);
        }
    });

    // Se da función al botón anterior
    botonIzquierdo.on("click", function () {
        //  Si la posición es menor que cero
        if (posicion < 0) {
            // Se aumenta la posición
            posicion += anchoDesplazamiento;
            // Y se transofrma con css
            pista.css("transform", `translateX(${posicion}px)`);
        }
    });

    // Devuelve el envoltorio
    return wrapper;

}

/**
 * Crea una lista genérica de comida
 * @param listaComida Lista de comida
 * @return {*|jQuery} Devuelve la lista creada
 */
export function crearListaGenerica(listaComida) {
    // Crea un wrapper para la lista de comida normal
    const wrapper = $("<div>").addClass("carrusel-wrapper");
    // Crea un carrusel para los platos
    const carruselComida = $("<div>").attr("id", "carruselComida");
    // Y una pista
    const pista = $("<div>").addClass("carrusel-pista");

    // Recorre la comida  y va añadiendo los elementos  a la pista
    listaComida.forEach((comida) => {
        pista.append(crearContenedorComida(comida));
    });

    // Añade la pista al carrusel
    carruselComida.append(pista);

    // Y el carrusel al wrapper
    wrapper.append(carruselComida);
    // Devuelve el wrapper
    return wrapper;
}