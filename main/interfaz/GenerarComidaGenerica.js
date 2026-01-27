import { crearListaGenerica } from "./ListaComida.js";

// Exportamos la función para usarla en otro archivo

export function crearComidaGenerica(texto, listaComida, contenedorComida) {
    const titulo = $("<h1>").attr("id", "titulo").text(texto);
    const contenedorGrupo = $("<div>").attr("id", "contenedor-grupo");
    const carrusel = crearListaGenerica(listaComida);

    contenedorGrupo.append(titulo);
    contenedorGrupo.append(carrusel);
    contenedorComida.append(contenedorGrupo);
}