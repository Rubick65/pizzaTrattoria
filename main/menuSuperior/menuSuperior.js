/**
 * Funcion para crear boton segun el texto que le pases
 * @param texto texto a escribir
 * @returns {*|jQuery} devuelve el div para su futuro uso
 */
function crearBoton(texto) {

    //Creamos div que contiene al boton
    let $div = $("<div>").addClass("botones");

    //Creamos el boton
    let $boton = $("<input>").attr("type", "button").val(texto);

    //Se añade al div y se devuelve
    $div.append($boton);
    return $div;
}

/**
 * Funcion para crear el menu segun la cantidad de botones
 */
function crearMenu() {
    //Se obtiene el header
    let $header = $("#header");

    //Creamos el contenedor de los botones
    let $menu = $("<div>").addClass("menu");

    //Por cada tituloBoton encontrado, se crea un boton y se añade al div
    tituloBotones.forEach(function (titulo) {
        $menu.append(crearBoton(titulo));
    });

    //El header lo obtiene ya creado todo.
    $header.append($menu);
}

//Lo pruebo :)
crearMenu();
