
const productos = [
    {
        id: 1,
        nombre: "Pizza Napoletana",
        precio: 700,
        img: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Pizza Margherita",
        precio: 800,
        img: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Pizza Pepperoni",
        precio: 850,
        img: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1231&q=80",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Pizza Fugazzeta",
        precio: 750,
        img: "https://www.barilocheya.com.ar/pizzeriabase/wp-content/uploads/sites/6/2020/03/fugazeta.jpg",
        cantidad: 1,
    },
];

const  guardarLocal = (clave, valor ) => {
    localStorage.setItem(clave, valor)
};

for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto))
};