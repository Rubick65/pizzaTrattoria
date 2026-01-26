class opcion {
    constructor(nombreOpcion,listaSubOpciones) {
        this.nombreOpcion = nombreOpcion;
        this.listaSubOpciones = listaSubOpciones;
    }
}

export const opciones = [
    new opcion("PRODUCTOS",["Menus","Entrantes","Pizzas","Bebidas","Postres"]),
    new opcion("MAS INFORMACION",["Listado de alergenos","tiendas para celiacos"]),
    new opcion("AVISO LEGAL",["Aviso legal","Politica de privacidad","Politica de cookies"])
]