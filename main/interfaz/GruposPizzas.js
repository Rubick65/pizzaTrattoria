import {crearListaComida} from "./ListaComida.js";
import {grupos, pizzas} from "../DataSource/cargarDatos.js";


// Sacamos el contenedor principal
const contenedorComida = $("#contenedorComida")

// Se recorren los distintos grupos
grupos.forEach(grupo => {
    // Y se van creando
    crearGruposPizzas(grupo)
});

/**
 * Crea los diferentes grupos de pizzas existentes
 * @param grupoPizzas Grupo de pizza a crear
 */
function crearGruposPizzas(grupoPizzas) {

    // Contenedor para contener todo el grupo
    const contenedorGrupoPizzas = $("<div>").attr("id", "contenedor-grupo");
    // Imagen banner que representa al grupo
    const imagenGrupo = $("<img>").attr("src", grupoPizzas.imagenGrupo).attr("id", "imagen-grupo");
    // Carrusel que contiene las diferentes pizzass
    const carruselPizzas = crearListaComida(grupoPizzas.listaPizzas);

    // Añade la imagen al contenedor
    contenedorGrupoPizzas.append(imagenGrupo)
    // Añade el carrusel al contenedor
    contenedorGrupoPizzas.append(carruselPizzas)
    // Y añade al grupo recien creado al contenedor principal
    contenedorComida.append(contenedorGrupoPizzas)
}