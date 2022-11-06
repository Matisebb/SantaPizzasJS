// carritoOn por medio de una funcion contendrá un modal que se mostrará con los productos agregados
const carritoOn = () => {

    ventanaCatalogo.innerHTML = "";
    ventanaCatalogo.style.display = "flex"
    const tituloVentana = document.createElement("div");
    tituloVentana.className = "titulo-ventana"
    tituloVentana.innerHTML = `
        <h1 class="titulo-ventana-titulo"> Sus productos</h1>
    `
//ventanaCatalogo capturará tituloVentana y será insertado en el mismo (visualmente en el div del html)
    ventanaCatalogo.append(tituloVentana);


    const botonVentana = document.createElement("h2");
    botonVentana.innerText = "x";
    botonVentana.className = "titulo-ventana-boton";
//al efectuar el evento "click" en la "X" y con el uso de css con style.display, ésta estará oculta
    botonVentana.addEventListener("click", () => {
        ventanaCatalogo.style.display = "none";
    })

//tituloVentana contendrá botonVentana que es la "X" en el modal de productos 
    tituloVentana.append(botonVentana);

// se llama a la variable carrito y por medio de un forEach se recorre product de cada uno de los productos seleccionados
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
            <span class="delete-product" > ❌ </span>
            <p>Total: ${product.cantidad * product.precio}</p>
            
        `;
// ventanaCatalogo agregará el contenido de "contenidoCarrito" y lo mostrará en el modal creado anteriormente
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
});

let eliminar = contenidoCarrito.querySelector(".delete-product");
eliminar.addEventListener("click", () => {
    eliminarProducto(product.id);
})
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

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

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
        timer: 5000,
        showConfirmButton: true,
    
    });
};
