import { crearListaGenerica } from "./ListaComida.js";

// Exportamos la función para usarla en otro archivo

/**
 * Funcion para crear el div que contendra toda la comida
 * @param texto para poner en titulo
 * @param listaComida lista de comidas genericas a generar
 * @param contenedorComida contenedor donde se contendran las comidas
 */
export function crearComidaGenerica(texto, listaComida, contenedorComida) {
    const titulo = $("<h1>").attr("id", "titulo").text(texto);
    const contenedorGrupo = $("<div>").attr("id", "contenedor-grupo");

    //Se crea un carrusel con todas las comidas ya generadas
    const carrusel = crearListaGenerica(listaComida);

    contenedorGrupo.append(titulo);
    contenedorGrupo.append(carrusel);
    contenedorComida.append(contenedorGrupo);
}