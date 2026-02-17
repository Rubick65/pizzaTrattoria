import {Comida} from "./Comida.js";

export class Entrantes extends Comida{

    /**
     * Valores iniciales del entrante
     * @param nombre Nombre del entrante
     * @param imagen Imagen del entrante
     * @param tamanio Tamaño del entrante
     * @param precio Precio del entrante
     * @param cantidad Cantidad del entrante
     * @param descripcion Descripción del entrante
     * @param unidades Unidades del entrante
     */
    constructor(nombre,imagen,tamanio,precio,cantidad,descripcion, unidades = null) {
        super(nombre,imagen,tamanio,precio,cantidad);
        this.descripcion = descripcion;
        this._unidades = unidades;

    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    get unidades() {
        return this._unidades;
    }

    set unidades(value) {
        this._unidades = value;
    }
    toString() {
        return this.descripcion.toString();
    }
}