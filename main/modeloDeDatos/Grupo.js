class Grupo {

    constructor(listaPizzas, imagenGrupo) {
        this.listaPizzas = listaPizzas;
        this.imagenGrupo = imagenGrupo;
    }

    get listaPizzas() {
        return this._listaIdsPizzas;
    }

    set listaPizzas(value) {
        this._listaIdsPizzas = value;
    }


    get imagenGrupo() {
        return this._imagenGrupo;
    }

    set imagenGrupo(value) {
        this._imagenGrupo = value;
    }
}