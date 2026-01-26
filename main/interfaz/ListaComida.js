import {crearContenedorComida} from "./ContenedorComida.js";
import {pizzas, entrantes} from "../DataSource/cargarDatos.js";


export function crearListaComida(listaComida) {
    const wrapper = $("<div>").addClass("carrusel-wrapper");

    const carruselComida = $("<div>").attr("id", "carruselComida");

    const botonIzquierdo = $("<button>")
        .addClass("botonCarrusel")
        .attr("id", "anterior");

    const botonDerecho = $("<button>")
        .addClass("botonCarrusel")
        .attr("id", "siguiente");

    const pista = $("<div>").addClass("carrusel-pista");

    listaComida.forEach((comida) => {
        pista.append(crearContenedorComida(comida));
    });

    carruselComida.append(botonIzquierdo);
    carruselComida.append(pista);
    carruselComida.append(botonDerecho);


    wrapper.append(carruselComida);

    let posicion = 0;
    const anchoDesplazamiento = 300;

    botonDerecho.on("click", function () {
        const limite = (listaComida.length - 3) * anchoDesplazamiento;
        if (Math.abs(posicion) < limite) {
            posicion -= anchoDesplazamiento;
            pista.css("transform", `translateX(${posicion}px)`);
        }
    });

    botonIzquierdo.on("click", function () {
        if (posicion < 0) {
            posicion += anchoDesplazamiento;
            pista.css("transform", `translateX(${posicion}px)`);
        }
    });

    return wrapper;

}