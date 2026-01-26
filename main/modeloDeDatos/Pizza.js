import {Comida} from "./Comida.js";

export const MASA = Object.freeze({
    CLASICA: "clasica",
    FINA: "fina",
    GRUESA: "gruesa",
});


export class Pizza extends Comida {

    /**
     * Da valores iniciales a las pizzas
     * @param nombre Nombre de la pizza
     * @param imagen Imagen específica de la pizza
     * @param tamanio Tamaño de la pizza PEQUEÑO, MEDIANO, GRANDE
     * @param precio Precio de la pizza
     * @param cantidad Cantidad de pizzas del mismo tipo
     * @param masa Tipo de masa de la pizza
     * @param ingredientes Ingredientes específicos de la pizza
     * @param gluten Indica si la pizza tiene gluten o no
     */
    constructor(nombre, imagen, tamanio, precio, cantidad, masa, ingredientes, gluten) {
        super(nombre, imagen, tamanio, precio, cantidad);
        this.masa = masa;
        this.ingredientes = ingredientes;
        this.gluten = gluten;
    }


    get masa() {
        return this._masa;
    }

    set masa(value) {

        switch (value.toLowerCase()) {
            case MASA.CLASICA:
                this._masa = MASA.CLASICA;
                break
            case MASA.FINA:
                this._masa = MASA.FINA;
                break;
            case MASA.GRUESA:
                this._masa = MASA.GRUESA;
                break;
            default:
                this._masa = MASA.CLASICA;
                break;

        }
    }

    get ingredientes() {
        return this._ingredientes;
    }

    set ingredientes(value) {
        this._ingredientes = value;
    }

    get gluten() {
        return this._gluten;
    }

    set gluten(value) {
        this._gluten = value;
    }

    toString() {
        return this.ingredientes.toString();
    }
}