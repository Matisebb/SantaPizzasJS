
const pintarCarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title"> Sus productos</h1>
    `
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h2");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);


    carrito.forEach((product)=> {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
            <span class="reduce"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="add"> + </span>
            <p>Total: ${product.cantidad * product.precio}</p>
            
        `;

        modalContainer.append(carritoContent);

// capturamos ambos "span" con un querySelector y por medio de un add event listener (click), se restarán o sumarán productos
let reduce = carritoContent.querySelector(".reduce");
reduce.addEventListener("click", () => {
    if(product.cantidad !== 1){
        product.cantidad--;
    }
    pintarCarrito();
    localSave();
});

let sumar = carritoContent.querySelector(".add");
sumar.addEventListener("click", () => {
    product.cantidad++;
    pintarCarrito();
    localSave();
})

        let eliminar = document.createElement("span");

        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });


//Utilizando el metodo reduce sumamos todos los productos seleccionados para obtener el total de la compra
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalComprado = document.createElement("div")
    totalComprado.className = "total-content"
    totalComprado.innerHTML = `<p>Total a pagar: ${total} $</p>
    <button class="buttonComprar"> Comprar </button>`;
    modalContainer.append(totalComprado); 

    };

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;

    });
    carritoCounter();
    localSave();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

carritoCounter();