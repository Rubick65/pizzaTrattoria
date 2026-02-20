// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    // Selecciona el contenedor que se mueve
    const track = document.querySelector(".carousel-track");
    let index = 0;

    // Cambia de imagen automáticamente cada 6 segundos
    setInterval(() => {

        // Alterna entre 0 y 1 (las dos imágenes)
        index = (index + 1) % 2;

        // Desplaza el carrusel horizontalmente
        track.style.transform = `translateX(-${index * 50}%)`;

    }, 6000);

});