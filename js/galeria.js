const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const containerLight = document.querySelector(".imagen-light");
// const hamburguerx = document.querySelector(".hamburguer");

imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        aparecerImagen(imagen.getAttribute("src"));
    })
});

containerLight.addEventListener("click", (e) => {
    if(e.target !== imagenesLight){
        containerLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage"); 
        // hamburguerx.style.opacity = "0";   
    };
});

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    containerLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
};