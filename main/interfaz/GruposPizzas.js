import {crearListaComida} from "./ListaComida.js";
import {grupos, pizzas} from "../DataSource/cargarDatos.js";


// Sacamos el contenedor principal
const contenedorComida = $("#contenedorComida")

grupos.forEach(grupo => {
    crearGruposPizzas(grupo)
});

function crearGruposPizzas(grupoPizzas) {

    const contenedorGrupoPizzas = $("<div>").attr("id", "contenedor-grupo");
    const imagenGrupo = $("<img>").attr("src", grupoPizzas.imagenGrupo).attr("id", "imagen-grupo");
    const carruselPizzas = crearListaComida(grupoPizzas.listaPizzas);

    contenedorGrupoPizzas.append(imagenGrupo)
    contenedorGrupoPizzas.append(carruselPizzas)
    contenedorComida.append(contenedorGrupoPizzas)
}