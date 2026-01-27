import {entrantes} from "../DataSource/cargarDatos.js";
import {crearComidaGenerica} from "./GenerarComidaGenerica.js";

// Sacamos el contenedor principal
const contenedorComida = $("#contenedorComida");

crearComidaGenerica("Entrantes", entrantes, contenedorComida);