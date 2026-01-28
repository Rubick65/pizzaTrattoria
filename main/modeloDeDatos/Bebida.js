import {Comida} from "./Comida.js";

export const SABOR = Object.freeze({
    DULCE: "Dulce",
    SALADA: "Salada",
    AGRIA: "Agria",
    ACIDA: "Ácida",
    AMARGA: "Amarga",
    AGUA: "Agua",
});

export class Bebida extends Comida {

    /**
     * Modelo de datos del objeto bebida
     * @param nombre
     * @param imagen
     * @param tamanio
     * @param precio
     * @param cantidad a comprar de bebidas
     * @param mililitros cantidad de mililitros de cada bebida
     * @param sabor tipo de sabor de cada bebida
     * @param alcohol boolean para saber si contiene o no alcohol
     */
    constructor(nombre,imagen,tamanio,precio,cantidad,mililitros,sabor,alcohol) {
        super(nombre,imagen,tamanio,precio,cantidad);
        this._mililitros = mililitros;
        this._sabor = sabor;
        this._alcohol = alcohol;
    }

    get mililitros() {
        return this._mililitros;
    }

    set mililitros(mililitros) {
        this._mililitros = mililitros;
    }

    get sabor() {
        return this._sabor;
    }

    set sabor(sabor) {
        this._sabor = sabor;
    }

    get alcohol() {
        return this._alcohol;
    }

    set alcohol(alcohol) {
        this._alcohol = alcohol;
    }
    toString() {
        var alcohol_mensaje = "";
        if (this.alcohol) {
            alcohol_mensaje = "Con alcohol"
        }else {
            alcohol_mensaje = "Sin alcohol";
        }
        return this.sabor.toString()+ " " + alcohol_mensaje;
    }

}