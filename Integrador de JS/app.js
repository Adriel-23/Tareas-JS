const cart = [];
const products = [];
let loadingProducts = true;
let loadingCartError = null;
let stockError = null;
const cartContainer = document.getElementById('products-in-cart');
const cartContainerWrapper = document.getElementById('cart-container');
const productsContainer = document.getElementById('products-container');
const totalCartPriceElement = document.getElementById('total-cart-price');
const loaderElement = document.querySelector('.loader');
const errorContainer = document.getElementById('error-container');
const errorMessage = document.getElementById('error-message');
const acceptButton = document.getElementById('close-stock-error-button');
const stockErrorContainer = document.getElementById('stock-error-container');

async function loadProducts(){
    setLoadingProducts (true);
    try {
       // if(!determineSuccess(50)){
            const response = await fetch("https://dummyjson.com/products",{
            method: "GET",
            });
            if (!response.ok){
                throw new Error("La respuesta del servidor ha fallado");
            }
            setProductos((await response.json()).products);
            setLoadingProducts (false);
        //}
        /* else {
            setServerError(`Simulacro de error al cargar los productos`);
        } */
    }
    catch(error)
    {
        setLoadingProducts (false);
        setServerError(error.message);
        console.error("Error al pedir los datos", error);
    }
}

function determineSuccess(porcent) {
    const factor_porcentaje = porcent / 100
    const numero_random = Math.random() //Es un numero del 1 al 0
    return factor_porcentaje > numero_random
}


function setServerError(newError){
    loadingCartError = newError;
    renderError();
    
}
function setLoadingProducts(newLoading){
    loadingProducts = newLoading;
    renderLoadingProducts();
}
function setProductos(nuevosProductos){
    products.push(...nuevosProductos);
    renderProducts();
}

function renderError(){
    if(loadingCartError){
        errorContainer.classList.remove('hidden');
        let errorMessageCard = `No se han podido cargar los productos: `;
        errorMessage.textContent = errorMessageCard + loadingCartError;
        errorContainer.style.display = 'none';
        setTimeout(() => {
            errorContainer.style.display = '';
        }, 100);
    }
    else {
        errorContainer.classList.add('hidden');
    }
}
function renderLoadingProducts(){
    if(loadingProducts){
        loaderElement.classList.remove('hidden');
    } else {
        loaderElement.classList.add('hidden');
    }
}

function renderProducts(){
    if(!products){
        return null;
    }
    let plantillaProductos = ``;
    for(let product of products){
        plantillaProductos += `
            <div class="product">
                <img class="product-image" src="${product.thumbnail}" alt="${product.title}" />
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                </div>
                <div class="product-buttons">
                    <button class="add-to-cart" data-product-id="${product.id}">Agregar al carrito</    button>
                    <button class="remove-from-cart hidden" data-product-id="${product.id}">Eliminar    del carrito</button>
                    <button class="add-more-to-cart hidden" data-product-id="${product.id}">+</ button>
                </div>
            </div>
                `
    }
    productsContainer.innerHTML = plantillaProductos;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    for(let button of addToCartButtons){
        button.addEventListener('click',addToCart)
    }
    
    const removeFromCartButtonsProduct = document.querySelectorAll('.remove-from-cart');
    for(let button of removeFromCartButtonsProduct){
        button.addEventListener('click',removeFromCart)}
    
    const addMoreToCartButtons = document.querySelectorAll('.add-more-to-cart');
    for(let button of addMoreToCartButtons){
        button.addEventListener('click',increaseQuantity)}
}

function setCarrito(nuevoCarrito){
    cart.length = 0;
    cart.push(...nuevoCarrito);
    renderCart();
    renderTotalCartPrice();
}

function renderCart(){
    if(cart.length === 0){
        cartContainer.innerHTML = `<p id="empty-cart-message">El carrito está vacío</p>`;
        clearCartButton.classList.add('hidden');
        purchaseButton.disabled = true;
        return;
    }
    let plantillaCarrito = ``;
    for(let item of cart){
            const product = findItemFromProductsById(item.id);
            plantillaCarrito += `
                <div class="cart-item">
                    <img class="product-image" src="${product.thumbnail}" alt="${product.title}" />
                    <div class="cart-item-info">
                        <h3>${product.title}</h3>
                        <p class="price">$${product.price}</p>
                        <div class="quantity-controls">
                        <button class="decrease-quantity" data-product-id="${item.id}">-</button>
                        <p class="quantity">Cantidad: ${item.quantity}</p>
                        <button class="increase-quantity" data-product-id="${item.id}">+</button>
                        <button class="remove-from-cart" data-product-id="${item.id}">Eliminar</button>
                        </div>
                    </div>
                </div>
            `
        }
        clearCartButton.classList.remove('hidden');
        purchaseButton.disabled = false;
        cartContainer.innerHTML = plantillaCarrito;

        const increaseQuantityButtons = document.querySelectorAll('.increase-quantity');
        for(let button of increaseQuantityButtons){
            button.addEventListener('click', increaseQuantity);
        }

        const decreaseQuantityButtons = document.querySelectorAll('.decrease-quantity');
        for(let button of decreaseQuantityButtons){
            button.addEventListener('click', decreaseQuantity);
        }

        const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
        for(let button of removeFromCartButtons){
            button.addEventListener('click', removeFromCart);
        }
}
        

function increaseQuantity(event){
    const button_clicked = event.target;
    const productId = parseInt(button_clicked.dataset.productId);
    const existingItem = cart.find(item => item.id === productId);
    
    
    if(existingItem){
        if(existingItem.quantity >= findItemFromProductsById(productId).stock){
            stockError = `No hay suficiente stock para el producto "${findItemFromProductsById(productId).title}". Stock disponible: ${findItemFromProductsById(productId).stock}`;
            renderStockError();
            return;
        }

        existingItem.quantity += 1;

        const cartQuantityElement = cartContainer.querySelector(`[data-product-id="${productId}"]`).parentElement.parentElement.querySelector('.quantity');
            if(cartQuantityElement){
                cartQuantityElement.textContent = `Cantidad: ${existingItem.quantity}`;
            }
        
        renderTotalCartPrice();
    }
    
}

function decreaseQuantity(event){
    const button_clicked = event.target;
    const productId = parseInt(button_clicked.dataset.productId);
    const existingItem = cart.find(item => item.id === productId);
    if(existingItem){
        existingItem.quantity -= 1;
        
        if(existingItem.quantity <= 0){ 
            // Si la cantidad llega a 0 o menos, elimino del carrito
            const index = cart.findIndex(item => item.id === productId);
            cart.splice(index, 1);
            setCarrito([...cart]);
            
            // Busco los botones en la sección de productos
            const productElement = productsContainer.querySelector(`[data-product-id="${productId}"]`).parentElement;

            const removeButton = productElement.querySelector('.remove-from-cart');
            const addButton = productElement.querySelector('.add-to-cart');
            const addMoreButton = productElement.querySelector('.add-more-to-cart');

            removeButton.classList.add('hidden');
            addButton.classList.remove('hidden');
            addMoreButton.classList.add('hidden');
        } else {
            // Solo actualizo el texto, asi no se hace un "re-render" completo del carrito y evito molestias visuales
            const quantityElement = button_clicked.parentElement.querySelector('.quantity');
            quantityElement.textContent = `Cantidad: ${existingItem.quantity}`;
        }
    }
    renderTotalCartPrice();
}

function removeFromCart(event){
    const button_clicked = event.target;
    const productId = parseInt(button_clicked.dataset.productId);
    const itemIndex = cart.findIndex(item => item.id === productId);
    if(itemIndex !== -1){
        cart.splice(itemIndex, 1);
        setCarrito([...cart]);
        
    }
    
    const productElement = productsContainer.querySelector(`[data-product-id="${productId}"]`).parentElement;

    const removeButton = productElement.querySelector('.remove-from-cart');
    const addButton = productElement.querySelector('.add-to-cart');
    const addMoreButton = productElement.querySelector('.add-more-to-cart');

    removeButton.classList.add('hidden');
    addButton.classList.remove('hidden');
    addMoreButton.classList.add('hidden');
}


function addToCart(event){
    const button_clicked = event.target;
    const productId = parseInt(button_clicked.dataset.productId);
    const existingItem = cart.find(item => item.id === productId);
    if(!existingItem){
        cart.push({
        id: productId,
        quantity: 1,
        });
        setCarrito([...cart]);
        
    }
    const addButton = button_clicked.parentElement.querySelector('.add-to-cart');
    const removeButton = button_clicked.parentElement.querySelector('.remove-from-cart');
    const addMoreButton = button_clicked.parentElement.querySelector('.add-more-to-cart');

    addMoreButton.classList.remove('hidden');
    addButton.classList.add('hidden');
    removeButton.classList.remove('hidden');

}



function findItemFromProductsById(productId){
    for(let item of products){
        if(item.id === productId){
            return item;
        }
    }
    return null;
}
let totalPriceInCart = ""
function renderTotalCartPrice(){
    let totalPrice = 0;
    for(let item of cart){
        const product = findItemFromProductsById(item.id);
        totalPrice += product.price * item.quantity;
    }
    totalPriceInCart = `${totalPrice.toFixed(2)}`;
    totalCartPriceElement.textContent = `Total en Carrito: $${totalPrice.toFixed(2)}`;

}


const cartIcon = document.getElementById('cart-icon');
cartIcon.addEventListener('click', () => {
    cartContainerWrapper.classList.toggle('hidden');
    renderCart();
    renderTotalCartPrice();
});

const closeErrorButton = document.getElementById('close-error-button');
closeErrorButton.addEventListener('click', () => {
    errorContainer.classList.add('hidden');
});

const retryButton = document.getElementById('retry-button');
retryButton.addEventListener('click', () => {
    errorContainer.classList.add('hidden');
    loadProducts();
});

const clearCartButton = document.getElementById('clear-cart-button');
clearCartButton.addEventListener('click', clearCart);
function clearCart(){
    setCarrito([]);

    const removeFromCartButtonsProduct = document.querySelectorAll('.remove-from-cart');
    for(let button of removeFromCartButtonsProduct){
        button.classList.add('hidden');
    }
    const addToCartButtonsProduct = document.querySelectorAll('.add-to-cart');
    for(let button of addToCartButtonsProduct){
        button.classList.remove('hidden');
    }
    const addMoreToCartButtonsProduct = document.querySelectorAll('.add-more-to-cart');
    for(let button of addMoreToCartButtonsProduct){
        button.classList.add('hidden');
    }
}
    
acceptButton.addEventListener('click', () => {
    stockError = null;
    renderStockError();
});


function renderStockError(){
    const stockErrorMessage = document.getElementById('stock-error-message');
    if(stockError){
        stockErrorContainer.classList.remove('hidden');
        stockErrorMessage.textContent = stockError;
    }
    else {
        stockErrorContainer.classList.add('hidden');
    }
}

function showStockItem(){
    if(products.length > 0){
        for (let stockItem of products){
            console.log(stockItem.title);
            console.log(stockItem.stock);
        }
    }
}

const purchaseButton = document.getElementById('purchase-button');
purchaseButton.addEventListener('click', purchaseCart);

function purchaseCart(){

    alert(`Gracias por su compra! El total es $${totalPriceInCart}`);
    setCarrito([]);

    const removeFromCartButtonsProduct = document.querySelectorAll('.remove-from-cart');
    for(let button of removeFromCartButtonsProduct){
        button.classList.add('hidden');
    }
    const addToCartButtonsProduct = document.querySelectorAll('.add-to-cart');
    for(let button of addToCartButtonsProduct){
        button.classList.remove('hidden');
    }
    const addMoreToCartButtonsProduct = document.querySelectorAll('.add-more-to-cart');
    for(let button of addMoreToCartButtonsProduct){
        button.classList.add('hidden');
    }
}
const logo = document.querySelector('#logo-image-container');
logo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll suave
    });
});
// prueba de la lista de title junto al stock mediante consola
// Ejecutar después de cargar los productos
/* loadProducts().then(() => {
    showStockItem();
}); */
loadProducts();