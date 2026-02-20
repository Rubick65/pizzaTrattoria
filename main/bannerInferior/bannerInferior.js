document.addEventListener("DOMContentLoaded", () => {

    const bannerInferiorContainer = document.getElementById("banner-inferior-container");

    // Si la pagina no tiene banner inferior, no hacemos nada
    if (!bannerInferiorContainer) return;

    // Creamos el banner dinámicamente
    crearBannerInferior();

    // Insertamos la estructura HTML del banner dentro del contenedor
    function crearBannerInferior() {

        bannerInferiorContainer.innerHTML = `
            <div class="bottom-banner">

                <div class="pattern"></div>

                <div class="overlay"></div>

            </div>
        `;
    }

});
