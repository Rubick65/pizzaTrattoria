import {Comida} from "./Comida.js";

export class Menu extends Comida {
    /**
     * Valores iniciales a los atributos de clase
     * @param nombre Nombre del menú
     * @param imagen Imagen del menú
     * @param tamanio Tamaño del menú
     * @param precio Precio del menú
     * @param cantidad Cantidad del menú
     * @param listaComida Lista de comidas que incluye el menú
     */
    constructor(nombre, imagen, tamanio, precio, cantidad, listaComida) {
        super(nombre, imagen, tamanio, precio, cantidad);
        this.listaComida = listaComida;
    }

    get listaComida() {
        return this._listaComida;
    }

    set listaComida(value) {
        this._listaComida = value;
    }
}