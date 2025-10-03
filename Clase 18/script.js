// FUNCIONES
/* 
    Es un bloque de codigo guardado en memoria encargado de resolver un problema especifico.
*/
// SALUDAR: Mostrar un "HOLA" por alerta.

/* function saludar(){
    alert ("Hola")
}
//INVOCACIÓN de la función(Llama a la función para que actue): Si o si con parentesis "()"
saludar()
// Se puede invocar las veces que quieras. Ej:
saludar()
saludar() */

/* Agregar parametro: Se hace dentro de los parentesis de la función:
 */
// JAVASCRIPT es de tipado debil y tambien es de tipado dinamico 

/* function saludar(nombre){
    alert ("Hola "+nombre)
}
saludar("Adriel")
saludar("Sabri") */

// QUIERO saludar por consola, por alert y por html:
//Segun los principios SOLID, una función debe tener una única responsabilidad.


//La responsabilidad de "saludar" es determinar el saludo y mostrarlo(Eso son dos responsabilidades y está mal). Deberia tener la responsabilidad de determinar el saludo unicamente.
/* function saludar(nombre){
    alert ("Hola "+nombre)
}
//El return de una función es el valor que da una función al resolverse.:

//Ahora, solo determina el saludo, eso está bien
function saludar(nombre){
    let saludo = ("Hola "+nombre)
    return saludo
}
console.log (saludar("Sabri"))
document.writeln(saludar("Sabri"))
alert (saludar("Adriel")) */

// Hacer la función "Calcular IVA"
// Debe recibir un precio
// Retornar el 21% del precio

/* function calcular_iva(precio){
    let iva = (precio*0.21)
    return iva
}
precio = prompt ("Ingrese un precio")
alert (calcular_iva(precio)) */



/*
9) Crea una función llamada sumar (a,b) y nos devuelva la suma de a y b
10) Crea una función llamada restar (a,b) y nos devuelva la resta de a y b
11) Crea una función llamada calcular (operación, a, b) y dependiendo de si la operación es "+" o "-" invocar la función sumar(a,b) o restar (a,b) (retornar el resultado), en caso de recibir una operacion no valida devolver null 
12) Crea una función llamada ContarHasta(número) y nos cuente hasta ese número por consola.
*/

/* function sumar(a, b){
    let suma = (Number(a)+Number(b))
    return suma
}
function restar(a, b) {
    let resta = (Number(a)-Number(b))
    return resta
}
function calcular(operacion, a, b){
    if (operacion === "sumar" || operacion === "+"){
        return sumar(a,b)
    }
    else if (operacion === "Restar" || operacion === "-"){
        return restar(a,b)
    }
}
operacion = prompt ("Ingrese la operación a realizar: \nsumar (+) \nrestar (-)")
a = prompt ("ingrese el valor A")
b = prompt ("Ingrese el valor B")

alert (calcular(operacion, a, b))
 */
/* function contarHasta (numero){
    let conteo = 0
    for (
        let i = 1;
        i <= (numero);
        i++
        )
    return conteo
}
numero = prompt("Hasta que numero desea contar?")
alert (contarHasta(numero)) 
Está mal esto y no sé por qué*/


/* 
13)Defini una función convertirHorasEnSegundos que reciba como argumento un numero de horas y devuelva la conversión a segundos de dicha cantidad de horas
*/
/* function convertirHorasEnSegundos(horas){
    
    let tiempo = (Number(horas)*3600)
    return tiempo
} 
horas = prompt ("Ingrese las horas que convertirá a segundos")
while (!horas || isNaN(horas)){
    if (horas === null){
        alert ("Ha cancelado la operación"); break;
    }
        alert ("No ha ingresado un número válido")
        horas = prompt ("Vuelva a ingresar un número")
    }
    if (horas) {
        alert (horas+" horas son "+(convertirHorasEnSegundos(horas))+" segundos.")
    } */

/* 
14)Definir una función esVocal que tome por parámetro un string letra y nos indique si letra es vocal o no lo es.
*/

function esVocal(letra){
    const a = "a";
    const e = "e";
    const i = "i";
    const o = "o";
    const u = "u";
    if (letra !== a && letra !== e && letra !== i && letra !== o && letra !== u ){
        return noEsVocal
    }
    else {
        return siEsVocal
    }
}
let noEsVocal = "No es vocal"
let siEsVocal = "Si es vocal"
letra = prompt ("Ingrese una letra para verificar si es vocal o no")
alert (esVocal(letra))




/* 
15) Necesitamos crear una función que pida ingresar una cantidad de grados celsius, mediante el siguiente mensaje: "ingrese una cantidad de grados celsius"
Con esta información, el programa deberá mostrar la conversión de grados celsius a grados fahrenheit con el mensaje: "La conversión de (xgrados) grados celsius a Fahrenheit es: (resultado)"
*/

/* function celsiusFahrenheit(grados){
    
    let fahrenheit = ((Number(grados)*9/5)+32)
    return fahrenheit
} 
grados = prompt ("Ingrese una cantidad de grados celsius")
while (!grados || isNaN(grados)){
    if (grados === null){
        alert ("Ha cancelado la operación"); break;
    }
        alert ("No ha ingresado un número válido")
        grados = prompt ("Vuelva a ingresar un número")
    }
    if (grados) {
        alert ("La conversión de "+grados+"° Celsius a Fahrenheit son "+(celsiusFahrenheit(grados))+"°.")
    } */