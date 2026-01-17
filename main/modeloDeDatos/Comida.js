const TAMANIO = Object.freeze({
    PEQUENIO: "pequeño",
    MEDIANO: "mediano",
    GRANDE: "grande",
});

class Comida {

    /**
     * Da valores por defecto a los atributos de clase
     * @param nombre Nombre de la comida
     * @param imagen Imagen de la comida
     * @param tamanio Tamaño de la comida
     * @param precio Precio de la comida
     * @param cantidad Cantidad en de la comida
     */
    constructor(nombre, imagen, tamanio, precio, cantidad) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tamanio = tamanio;
        this.precio = precio;
        this.cantidad = cantidad;
        this._id = id;
    }


//Getters y setters
    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get imagen() {
        return this._imagen;
    }

    set imagen(value) {
        this._imagen = value;
    }

    get tamanio() {
        return this._tamanio;
    }

    set tamanio(value) {
        switch (value.toLowerCase()) {
            case TAMANIO.PEQUENIO:
                this._tamanio = TAMANIO.PEQUENIO;
                break;
            case TAMANIO.MEDIANO:
                this._tamanio = TAMANIO.MEDIANO;
                break;
            case TAMANIO.GRANDE:
                this._tamanio = TAMANIO.GRANDE;
                break;
            default:
                this._tamanio = TAMANIO.PEQUENIO;
                break
        }
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }


    get cantidad() {
        return this._cantidad;
    }

    set cantidad(value) {
        this._cantidad = value;
    }
}