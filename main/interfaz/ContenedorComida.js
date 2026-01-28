/**
 * Crea el contenedor donde se pondrán los datos de la comida
 * @param comida Comida cuyos datos queremos mostrar
 */
export function crearContenedorComida(comida) {

    // Contenedor princiapl para los datos de la comida
    const divComida = $("<div>").attr("id", "divComida");

    // Crea el overlay para la info expandida de la comida
    crearOverlay(divComida, comida);

    // Imagen de la comida y nombre
    const imagenComida = $("<img>").attr("src", comida.imagen).attr("id", "imagenComida");
    const nombreComida = $("<h2>").attr("id", "nombreComida").text(comida.nombre);

    // Las añade al div principal
    divComida.append(imagenComida);
    divComida.append(nombreComida);

    return divComida;

}

/**
 * Overlay para la información extendida
 * @param divComida Contenedor con que guarda la comida
 * @param comida Comida cuya infomración se va a mostrar
 */
function crearOverlay(divComida, comida) {
    // Overlay, por defecto en oculto
    const overlay = $("<div>").attr("class", "oculto").attr("id", "overlay");

    crearModal(overlay, comida)

    // Se añade el overlay al contendor de la comida
    divComida.append(overlay);

    // Si se pasa por encima del contenedor
    divComida.on("mouseenter", function () {
        // Se muestra el overlay
        overlay.removeClass("oculto");
    });

    // Se se sale de contenedor
    divComida.on("mouseleave", function () {
        // Se oculta el overlay
        overlay.addClass("oculto");
    });

}

/**
 * Crea el modal con la información extendida
 * @param modal Contenedor al que se va a añadir la info
 * @param comida Comida actual cuya información se va a mostrar
 */
function crearModal(modal, comida) {
    // Crea el contendor y le añade el nombre y la descripición
    const contenedorInfo = $("<div>").attr("id", "contenedorInfo");
    const nombreComida = $("<h2>").attr("id", "nombre-modal").text(comida.nombre);
    const descripcionComida = $("<p>").attr("id", "descripcionComida").text(comida);

    // Añade al contendor el nombre y la descripción
    contenedorInfo.append(nombreComida);
    contenedorInfo.append(descripcionComida)
    // Crea los botones y los añade al contendor
    contenedorInfo.append(crearBotones(contenedorInfo));

    // Por último añade el contendor al modal
    modal.append(contenedorInfo);
}


/**
 * Crea los botones de recoger y a domicilio
 * @param contenedorInfo Contenedor al que se le añaden los botones
 * @return Devuleve el contenedor con ambos botones
 */
function crearBotones(contenedorInfo) {
    // Crea el contendor y los dos botones
    const contenedorBotones = $("<div>").attr("id", "contenedorBotones");
    const botonDomicilio = $("<button>").attr("id", "botonDomicilio").addClass("botones-pedido").text("Domicilio");
    const botonRecoger = $("<button>").attr("id", "botonRecoger").addClass("botones-pedido").text("Recoger");

    // Añade los dos botones al contenedor
    contenedorBotones.append(botonDomicilio);
    contenedorBotones.append(botonRecoger);

    // Devuelve el contenedor
    return contenedorBotones;
}