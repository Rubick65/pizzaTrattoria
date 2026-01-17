class Menu extends Comida {
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