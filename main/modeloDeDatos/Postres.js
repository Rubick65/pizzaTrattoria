export class Postres extends Comida{

    /**
     * Modelo de datos del objeto postre
     * @param nombre
     * @param imagen
     * @param tamanio
     * @param precio
     * @param cantidad
     * @param calorias cantidad de calorias del postre en
     */
    constructor(nombre,imagen,tamanio,precio,cantidad,calorias) {
        super(nombre,imagen,tamanio,precio,cantidad);
        this._calorias = calorias;
    }

    get calorias() {
        return this._calorias;
    }

    set calorias(value) {
        this._calorias = value;
    }
}