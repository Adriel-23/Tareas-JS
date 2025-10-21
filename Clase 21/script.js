/* Crear una funcion que se llame calcularIva que reciba como parametro el precio de un producto y devuelva valor del iva (21%). */

/* let precio_producto_iva = prompt("Ingrese el precio del producto que desea comprar")
function calcularIva (precio_producto_iva){
    let iva = precio_producto_iva*0.21
    return ("El precio de su producto es $"+precio_producto_iva+" y el iva correspondiente es $"+iva)
}
alert (calcularIva(precio_producto_iva))  */

/* ## Un programa de carrito de compras
Se debe tener un carrito de compras (inicialmente vacio) en memoria
Cada producto dentro del carrito se guardara como: {id: 1, quantity: 1}
Se debe crear una funcion llamada agregarProductoAlCarrito que reciba un id_producto y una cantidad.
    - Si el producto existe debera sumar la cantidad a agregar a la cantidad existente
    - Si el producto no existe debera agregar el producto al carrito
REGLAS:
    - El carrito no puede tener 2 veces el mismo producto (osea con el mismo ID)
    - El carrito debe tener a cada producto con el formato {id: number, quantity: number} 
    - (Le agregué yo un nombre a los productos para que se vea mas lindo)*/

let shopping_cart = []

function agregarProductoAlCarrito(id_product, quantity_product) {
    
    for (let product of shopping_cart) {
        if (id_product === product.id) {
            product.quantity = product.quantity + Number(quantity_product)
            return product
        }
    }
    let product = {
        id: Number(id_product),
        quantity: Number(quantity_product),
    }
    shopping_cart.push(product)
    return product
}


/* 
eliminarProductoPorId(id_producto, cantidad)
- Si el producto no esta debe retornara null
- Si esta:
    -Si la cantidad a eliminar es mayor a la cantidad en carrito debera retornar null
    -SINO:
        -Si la cantidad es exactamente la cantidad en el carrito debera eliminar el item del carrito
        -SINO:
            - Decrementar la cantidad del item por la cantidad a restar

REGLAS:
- El carrito no puede tener 2 veces el mismo producto (osea con el mismo ID)
- El carrito debe tener a cada producto con el formato {id: number, quantity: number}
- El carrito no puede tener un item con cantidad negativa o 0
*/
function findProduct(id_product){
    for (let product of shopping_cart){
        if(id_product===product.id){
            return
        }
    }
    return null
}

function eliminarProductoPorId(id_product, quantity_product) {
    const product_found = findProduct(id_product)
    if (!product_found || product_found.quantity < quantity_product){
        return null
    }
    if(product_found.quantity === quantity_product){
        let indice_a_eliminar = shopping_cart.indexOf(product_found)
        shopping_cart.splice(indice_a_eliminar, 1)
        
    }
    if(product_found.quantity > quantity_product){
        product_found.quantity = product_found.quantity - quantity_product
    }
    return product
}



agregarProductoAlCarrito(3, 10)

eliminarProductoPorId(3, 3)


console.log(eliminarProductoPorId(3, 3))


console.log(shopping_cart) 