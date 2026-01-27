document.addEventListener("DOMContentLoaded", () => {

    const bannerInferiorContainer = document.getElementById("banner-inferior-container");

    // Si la pagina no tiene banner inferior, no hacemos na
    if (!bannerInferiorContainer) return;

    crearBannerInferior();

    function crearBannerInferior() {

        bannerInferiorContainer.innerHTML = `
            <div class="bottom-banner">

                <div class="pattern"></div>

                <div class="overlay"></div>

            </div>
        `;
    }

});
