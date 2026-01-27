import {postres} from "../DataSource/cargarDatos.js";
import {crearComidaGenerica} from "./GenerarComidaGenerica.js";

// Sacamos el contenedor principal
const contenedorComida = $("#contenedorComida");

crearComidaGenerica("Postres", postres, contenedorComida);