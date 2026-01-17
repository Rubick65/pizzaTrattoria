export class Entrantes extends Comida{

    constructor(nombre,imagen,tamanio,precio,cantidad,descripcion) {
        super(nombre,imagen,tamanio,precio,cantidad);
        this.descripcion = descripcion;
    }

    constructor(nombre,imagen,tamanio,precio,cantidad,descripcion,unidades) {
        super(nombre,imagen,tamanio,precio,cantidad);
        this._descripcion = descripcion;
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
}