
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [];


productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);    

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";



    content.append(comprar);
    
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
        console.log(carrito);
        carritoCounter();
    });
});

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