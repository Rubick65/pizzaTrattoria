document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel-track");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 2;
        track.style.transform = `translateX(-${index * 50}%)`;
    }, 6000); // 6 segundos

});
