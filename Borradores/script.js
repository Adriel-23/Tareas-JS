const pan = [
    {
        name: "Tortita",
        price: 4,
        id: 1,
        quantity: 5
    },
    {
        name: "Baguette",
        price: 3,
        id: 2,
        quantity: 3
    }
]


const pancitosDiv = document.getElementById("pancitos");
function renderizarPanes (){
    let plantilla_panes = "";
    for (let item of pan){
        plantilla_panes = plantilla_panes + `
        <div class="pan-item">
            <h2>${item.name}</h2>
            <p>Precio: $${item.price}</p>
            <div>
            <button class="btn-disminuir" data-id="${item.id}"> - </button>
            <span>${item.quantity}</span>
            <button class="btn-aumentar" data-id="${item.id}"> + </button>
            </div>
        </div>`;
    }
    pancitosDiv.innerHTML = plantilla_panes;

    const botones_mas = pancitosDiv.getElementsByClassName("btn-aumentar")
    for (const boton of botones_mas){
        boton.addEventListener("click", aumentarCantidad);
    }
    const botones_menos = pancitosDiv.getElementsByClassName("btn-disminuir")
    for (const boton of botones_menos){
        boton.addEventListener("click", disminuirCantidad);
    }
}

function aumentarCantidad(event){
    console.log(event.target);
    const boton_clickeado = event.target;
    console.log(boton_clickeado.dataset.id);
    const item_id = boton_clickeado.dataset.id;
    const boton_selected = buscarPanPorId(Number(item_id));
    boton_selected.quantity = boton_selected.quantity + 1;
    renderizarPanes();
}
function disminuirCantidad(event){
    console.log(event.target);
    const boton_clickeado = event.target;
    console.log(boton_clickeado.dataset.id);
    const item_id = boton_clickeado.dataset.id;
    const boton_selected = buscarPanPorId(Number(item_id));
    boton_selected.quantity = boton_selected.quantity - 1;
    renderizarPanes();
}

function buscarPanPorId(item_id){
    for (let item of pan){
        if (item.id === item_id){
            return item;
        }
    }
    return null;
}
renderizarPanes(); 