// MENU DESPLEGABLE FUNCIONAL
const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navigation");

hamburguer.addEventListener("click", () =>{
    menu.classList.toggle("spread")
});

window.addEventListener("click", e =>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != hamburguer ){
        menu.classList.toggle("spread");
    }
});

//CARRITO COMPRAS - VISUAL

//la propiedad de getElementById capturará el id "productoCatalogo" del html que será el elemento div que contendrá a la variable "menu"
const productoCatalogo = document.getElementById("productoCatalogo");

//se captura por medio del id del html, la opcion de visualizar el "carrito" fisico
const verCarrito = document.getElementById("verCarrito");

// por medio de id se captura el div que permitirá insertar las propiedades asignadas en ventanaCatalogo
const ventanaCatalogo = document.getElementById("ventanaCatalogo");


const cantidadCarrito = document.getElementById("cantidadCarrito");





// Se recopilaran los productos que quedasen guardados en el carrito o será carrito vacio en donde serán pusheados los productos del array productos de products.js 
// LOCALSTORAGE - GetItem

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// forEach que recorre el array de products.js
// let menu por medio de un document.createElement contendrá elementos html del array de productos en products.js
productos.forEach((product) => {
    let menu = document.createElement("div");
    menu.className = "articulo";
    menu.innerHTML = `
        <img src="${product.img}">
        <h3 class ="nombre">${product.nombre}</h3>
        <p class="txt">${product.precio} $</p>
        <p class="txt">${product.descripcion}</p>
    `;
    
// productoCatalogo tendrá insertado lo creado de la variable menu en el div del html
    productoCatalogo.append(menu);    

// se crea una variable y en ella se crea el boton (por medio de innertext que interpretaría el elemento html button)
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";


// utilizamos nuevamente append para agregar al div menu de la variable menu
    menu.append(comprar);

//a traves de addEventListener (click), en carrito se irán agregando de product id, nombre, precio, img y cantidad
//también se emergerá un mensaje de confirmacion de los productos agregador con exito al carrito  
    comprar.addEventListener("click", () => {
        Toastify({
            text: "Su producto ha sido agregado al carrito con exito!",
            duration: 1700,
            position: "center",
            gravity: "top",
            style: {
                background: "#ff4a11"
            }
        }).showToast();

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            carrito.map((prod) => {
                if(prod.id  === product.id){
                    prod.cantidad++;
                }
            })
        } else {
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            img: product.img,
            cantidad: product.cantidad,
        });
    }
        carritoCounter();
        localSave();
    });
});

// LOCALSTORAGE - SetItem
const localSave = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};



// FORMULARIO
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_9gugrcg';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarse',
    })
    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});


// CONTADOR LOCAL

let tiempo = document.getElementById("tiempo");
let deadline = new Date("Dec, 2022, 12:37:25").getTime(); 
let x = setInterval(function() { 
let now = new Date().getTime(); 
let time = deadline - now; 
let days = Math.floor(time / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((time % (1000 * 60)) / 1000); 
tiempo.innerHTML =  days + "d "  
+ hours + "h " + minutes + "m " + seconds + "s ";

    if (time < 0) { 
        clearInterval(x); 
        demo.innerHTML = "EL GRAN DIA DE LA INAUGURACION ES HOY!! SGTO CABRAL 2355"; 
    } 
}, 1000);

// BOTON ASISTENCIA EVENTO INAUGURACION

function invitacion(){
    location.href = "https://wa.link/1meawj"
}

// BOTON FLOTANTE WP
const fgp_wa = document.createElement("fgp_wa");
fgp_wa.innerHTML = `
<fgp_wa class="wp">
<a href="http://wa.me/543786410792?text=Hola, quisiera realizar un pedido" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552"><defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"/><stop offset="1" stop-color="#23b33a"/></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"/></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"/><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/></svg>
</a>
</fgp_wa>
`;

document.body.appendChild(fgp_wa);