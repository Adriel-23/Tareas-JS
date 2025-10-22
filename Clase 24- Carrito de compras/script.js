const cart = [
    { 
        id: 1, 
        title: "Mouse Gamer HyperX Pulsefire FPS Pro Negro", 
        price: 220000,
        attachments: ["assets/mouse.png"],
        quantity: 1 
    },
    { 
        id: 2, 
        title: "Audifonos Astro A10", 
        price: 147000, 
        attachments: ["assets/astro-a10.png"],
        quantity: 2 
    },
    { 
        id: 3, 
        title: 'Monitor Samsung 22" FHD 75Hz Bordes Ultradelgados', 
        price: 171000, 
        attachments: ["assets/monitor.avif"],
        quantity: 1 
    },
    { 
        id: 4, 
        title: "Microfono HyperX SoloCast Black", 
        price: 178000, 
        attachments: ["assets/microfono.webp"],
        quantity: 1
    }
]
const modalContainer = document.querySelector('.modal-container')
const btnCloseModal = document.querySelector('.btn-close')
const modal = document.querySelector('.modal-content')

const cartContainer = document.getElementById("shoppingCart");
const totalCartPrice = document.getElementById("total");
function renderCartItems() {
    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart">🛒 Su carrito está vacío</p>`;
        totalCartPrice.innerText = `Total: $0`;
        return;
    }
    let plantillas_products = '';
    for (let item of cart) {
        plantillas_products += `
            <div class="cart-item">
                    <img src="${item.attachments}" alt="${item.title}" class="product-image">
                    <div class="product-name-price">
                        <div class="name_price">
                            <h3>${item.title}</h3>
                            <div class="price-info">
                                <span>Precio: $${item.price}</span>
                                <span>Subtotal: $${item.price * item.quantity}</span>
                            </div>
                        </div>
                        <div class="controls">
                            <div class="quantity-controls">
                                <button class="decrement" data-product_id="${item.id}">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="increment" data-product_id="${item.id}">+</button>
                            </div>
                            <button class="delete" data-product_id="${item.id}">Eliminar</button>
                        </div>
                    </div>
            </div>
        `;
    }
    cartContainer.innerHTML = plantillas_products;
    const incrementButtons = document.getElementsByClassName("increment");
    for (let button of incrementButtons) {
        button.addEventListener("click", incrementItemQuantity);
    }
    const decrementButtons = document.getElementsByClassName("decrement");
    for (let button of decrementButtons) {
        button.addEventListener("click", decrementItemQuantity);
    }

    const deleteButtons = document.getElementsByClassName("delete");
    for (let button of deleteButtons) {
        button.addEventListener("click", deleteItem);
    }

    totalCartPrice.innerText = `Total: $${getTotalCartPrice()}`;
    
}
const clearCartbutton = document.getElementById("clearButton");
    clearCartbutton.innerText = "Vaciar Carrito";
    clearCartbutton.addEventListener("click", () => {
        clearCart();
        renderCartItems();
    });
function deleteItem(event) {
    try {
        if (determinarExito(80)) {
            const button_clicked = event.target;
            const product_id = Number(button_clicked.dataset.product_id);
            deleteItemById(product_id);
            renderCartItems();
        }
        else {
            throw new Error("No has podido eliminar el producto del carrito");
        }
    }
    catch (error) {
        renderModal("Fallo del servidor", error.message);
    }
}
function deleteItemById(product_id) {
    const i = cart.findIndex( item => item.id === product_id);
    if (i !== -1) {
        cart.splice(i, 1);
    }
}

function clearCart() {
    cart.length = 0;
}

function incrementItemQuantity(event) {
    try {
        if (determinarExito(10)) {
            const button_clicked = event.target;
            const product_id = Number(button_clicked.dataset.product_id);
            const button_selected = findItemFromCartById(product_id);
            button_selected.quantity = button_selected.quantity + 1;
            renderCartItems();
        }
        else {
            throw new Error("No has podido agregar el producto al carrito");
        }
    }
    catch (error) {
        renderModal("Fallo del servidor", error.message);
    }
}

function decrementItemQuantity(event) {
    try {
        if (determinarExito(30)) {
            const button_clicked = event.target;
            const product_id = Number(button_clicked.dataset.product_id);
            const button_selected = findItemFromCartById(product_id);
            button_selected.quantity = button_selected.quantity - 1;
            if (button_selected.quantity <= 0) {
                deleteItemById(product_id);
            }
            renderCartItems();
        }
        else {
            throw new Error("No has podido quitar el producto del carrito");
        }
    }
    catch (error) {
        renderModal("Fallo del servidor", error.message);
    }
}

function findItemFromCartById(product_id) {
    for(let item of cart){
        if(item.id === product_id){
            return item;
        }
    }
    return null;
}

function getTotalCartPrice(){
    let total = 0;
    for(let item of cart){
        total += item.price * item.quantity;
        
    }
    return total;
}

function determinarExito (porcentaje) {
    const factor_porcentaje = porcentaje / 100
    const numero_random = Math.random() //Es un numero del 1 al 0
    return factor_porcentaje > numero_random
}


function renderModal(title, text){
    modal.innerHTML =`
    <h3>${title}</h3>
    <p>${text}</p>
    `
    handleOpenModal()
}

function handleOpenModal() {
    //Eliminar la clase close de modalContainer
    modalContainer.classList.remove('close')
}

function handleCloseModal() {
    //agrega la clase close de modalContainer
    modalContainer.classList.add('close')
}

btnCloseModal.addEventListener(
    'click',
    handleCloseModal
)

renderCartItems();

/* 
- incrementar tasa-fallo: 10%
- decrementar tasa-fallo: 30%
- eliminar    tasa-fallo: 80%

Cuando incrementar falle deberas mostrar el modal de fallo: 
    Titulo: Fallo del servidor
    texto:  no has podido agregar el producto al carrito

Cuando decrementar falle deberas mostrar el modal de fallo: 
    Titulo: Fallo del servidor
    texto:  no has podido quitar el producto del carrito

Cuando eliminar falle deberas mostrar el modal de fallo: 
    Titulo: Fallo del servidor
    texto:  no has podido eliminar el producto del carrito
*/

