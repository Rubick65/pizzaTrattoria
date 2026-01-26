document.addEventListener("DOMContentLoaded", () => {


    const bannerContainer = document.getElementById("banner-container");
    const menuContainer = document.getElementById("menu-container");

    // Se crean siempre, en todas las páginas
    crearBanner();

    /**
     * Función que crea el banner superior (logo, idiomas y cesta)
     * El banner se genera siempre igual para todas las páginas
     */
    function crearBanner() {

        // Se mete el HTML del banner dentro de su contenedor
        bannerContainer.innerHTML = `
    <div class="top-banner" id="banner">

        <div class="banner-container">

            <!-- logo anclado a la izquierda -->
            <div class="logo" id="logo">
                <img src="../imagenes_pizzeria/logo.png" alt="Pizza Trattoria">
            </div>

         <!-- menu y cesta en la derecha -->
         <div class="right-group">

            <nav class="nav">
                <a href="#">ES</a>
                <a href="#">EN</a>
                <a href="#">Contáctanos</a>
            </nav>

            <div class="cart">
                <button id="btnCesta">CESTA</button>
            </div>

         </div>

        </div>

    </div>

        `;

        // Comportamiento al hacer click en el logo
        document.getElementById("logo").addEventListener("click", () => {
            window.location.href = "../botonesHTML/Pizzas.html";
        });

        // Comportamiento del botón cesta
        document.getElementById("btnCesta").addEventListener("click", () => {
            console.log("Cesta abierta");
        });

    }

});


