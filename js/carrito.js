
const carritoOn = () => {

    ventanaCatalogo.innerHTML = "";
    ventanaCatalogo.style.display = "flex"
    const tituloVentana = document.createElement("div");
    tituloVentana.className = "titulo-ventana"
    tituloVentana.innerHTML = `
        <h1 class="titulo-ventana-titulo"> Sus productos</h1>
    `
    ventanaCatalogo.append(tituloVentana);

    const botonVentana = document.createElement("h2");
    botonVentana.innerText = "x";
    botonVentana.className = "titulo-ventana-boton";

    botonVentana.addEventListener("click", () => {
        ventanaCatalogo.style.display = "none";
    })

    tituloVentana.append(botonVentana);


    carrito.forEach((product)=> {
        let contenidoCarrito = document.createElement("div");
        contenidoCarrito.className = "contenido-carrito";
        contenidoCarrito.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
            <span class="reduce"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="add"> + </span>
            <p>Total: ${product.cantidad * product.precio}</p>
            
        `;

        ventanaCatalogo.append(contenidoCarrito);

// capturamos ambos "span" con un querySelector y por medio de un add event listener (click), se restarán o sumarán productos
let reduce = contenidoCarrito.querySelector(".reduce");
reduce.addEventListener("click", () => {
    if(product.cantidad !== 1){
        product.cantidad--;
    }
    carritoOn();
    localSave();
});

let sumar = contenidoCarrito.querySelector(".add");
sumar.addEventListener("click", () => {
    product.cantidad++;
    carritoOn();
    localSave();
})

        let eliminar = document.createElement("span");

        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        contenidoCarrito.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });


//Utilizando el metodo reduce sumamos todos los productos seleccionados para obtener el total de la compra
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "total-content"
    totalComprado.innerHTML = `<p>Total a pagar: ${total} $</p>
    <button class="buttonComprar"> Comprar </button>`;
    ventanaCatalogo.append(totalComprado); 
    const botonComprar = document.querySelector(".buttonComprar")
    botonComprar.addEventListener('click', comprarButtonClicked);

    };

verCarrito.addEventListener("click", carritoOn);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;

    });
    carritoCounter();
    localSave();
    carritoOn();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

carritoCounter();

function comprarButtonClicked() {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra! ',
        text: 'Ha sido realizada con exito. En breve le enviamos su pedido!',
        position: 'center',
        timer: 6000,
        showConfirmButton: true,
    
    })
};
