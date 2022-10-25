


const productoCatalogo = document.getElementById("productoCatalogo");
const verCarrito = document.getElementById("verCarrito");
const ventanaCatalogo = document.getElementById("ventanaCatalogo");
const cantidadCarrito = document.getElementById("cantidadCarrito");



// Se recopilaran los productos que quedasen guardados en el carrito o será carrito vacio en donde serán pusheados los productos del array productos de products.js 
// LOCALSTORAGE - GetItem

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


productos.forEach((product) => {
    let menu = document.createElement("div");
    menu.className = "articulo";
    menu.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="txt">${product.precio} $</p>
        <p class="txt">${product.descripcion}</p>
    `;

    productoCatalogo.append(menu);    

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";



    menu.append(comprar);
    
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

