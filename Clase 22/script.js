/* const title = document.getElementById("title")
const sumita = document.getElementById("sumita")
title.innerText = 'Asadito piola II "La venganza"' 
console.log(title.innerText) */
/* 
    -Dado dos variables:
        a = 20
        b = 50
    Imprimir en HTML 'El resultado de {a} + {b} = {a + b}
*/
/* let a = 20

let b = 50

function sumar(a, b) {
    return a + b
}
let mensaje = `El resultado de ${a} + ${b} = ${sumar(a, b)}`

sumita.innerText = mensaje */

/* let [a, b] = prompt("Ingrese dos numeros separados por una coma").split(",").map(Number)
function sumar(a, b) {
    return a + b
}
let mensaje = `El resultado de ${a} + ${b} = ${sumar(a, b)}`
sumita.innerText = mensaje */

const mensajeria = document.querySelector(".mensajeria")
let mensajes = [
    {
        autor: 'Aristóteles',
        frase: 'La verdadera sabiduría está en reconocer la propia ignorancia',
        fecha: '384 a.C.',
        id: 1
    },
    {
        autor: 'Sócrates',
        frase: 'Solo sé que no sé nada',
        fecha: '470 a.C.',
        id: 2
    },
    {
        autor: 'Platón',
        frase: 'La educación es el camino hacia la sabiduría',
        fecha: '428 a.C.',
        id: 3
    },
]

function mostrarMensaje() {
    let cuadroDeMensaje = ""
    for (let mensaje of mensajes) {
        cuadroDeMensaje += `
        <div class="mensaje">
            <h2>${mensaje.autor}</h2>
            <p>"${mensaje.frase}"</p>
            <span>${mensaje.fecha}</span>
        </div>
        `
    }
    mensajeria.innerHTML = cuadroDeMensaje
}
mostrarMensaje()