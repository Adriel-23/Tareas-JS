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

    let shopping_cart=[]

    function agregarProductoAlCarrito(nombre_producto, id_product, quantity_product){
        let product = {
        nombre: nombre_producto,
        id: Number(id_product),
        quantity: Number(quantity_product),
        }
        for(let product of shopping_cart){
            if(id_product === product.id){
                product.quantity = product.quantity+Number(quantity_product)
                return product
            }   
        }
        shopping_cart.push(product)
    }
    agregarProductoAlCarrito("S25 Ultra", 2, 5)
    agregarProductoAlCarrito("S25", 3, 6)
    agregarProductoAlCarrito("S25 Ultra", 2, 5)
    agregarProductoAlCarrito("S25 Ultra", 4, 7)


    


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

    /* function verificarExistencia(id_product){
        for(product of shopping_cart)
    } */
    function eliminarProductoPorId (id_product, quantity_product){
        for(product of shopping_cart){
            if (id_product === product.id)
                if(quantity_product > product.quantity){
                return null; 
            }
                else {
            product.quantity = product.quantity-Number(quantity_product)
            return product
            }
        }
        return null
    }

    eliminarProductoPorId(2, 2)
    eliminarProductoPorId(3, 9)
    eliminarProductoPorId(4, 6)

    console.log (shopping_cart)  

