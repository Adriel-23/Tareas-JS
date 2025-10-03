//1)
//Ingresar una operacion ('+', '-', '*', '/') (prompt)
//Verificar si la operacion ingresada es valida
//Si es valida vamos a mostrar por alerta 'Operacion valida'
//Si no mostrar 'Operacion invalida'}


//1)-----------

/* let operacion = prompt ("Qué operación desea realizar?(+, -, *, /)")
if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
    alert ("Operación Válida")
}
else {
    alert ("Operación inválida")
} */

//2)-----------
/* let operacion = prompt ("Qué operación desea realizar?(+, -, *, /)")
if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
    let numero1 = prompt ("Ingrese el primer número")
        if (isNaN(numero1) || !numero1){
            alert ("Inválido")
        }
        else {
            let numero2 = prompt ("Ingrese segundo numero")
            if (isNaN(numero2) || !numero2){
            alert ("Inválido")
            }
        }
    } */
/* let numero = prompt ("Ingrese el primer número")
if (isNaN(numero) || !numero){
    alert ("Inválido")
}
else {
    let numero2 = prompt ("Ingrese segundo numero")
    if (isNaN(numero2) || !numero2){
    alert ("Inválido")
    }
} */

//3)-----------

/* let operacion = prompt ("Qué operación desea realizar?(+, -, *, /)")
if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
    let numero1 = prompt ("Ingrese el primer número")
        if (isNaN(numero1) || !numero1){
            alert ("Inválido")
        }
        else {
            let numero2 = prompt ("Ingrese segundo numero")
            if (isNaN(numero2) || !numero2){
            alert ("Inválido")
            }
            else {
                if (operacion === "+") {
                    alert("El resultado es " + (Number(numero1) + Number(numero2)))
                }
                else if (operacion === "-") {
                    alert("El resultado es " + (Number(numero1) - Number(numero2)))
                }
                else if (operacion === "*") {
                    alert("El resultado es " + (Number(numero1) * Number(numero2)))
                }
                else if(operacion === "/") {
                    alert("El resultado es " + (Number(numero1) / Number(numero2)))}
                else {
                    alert ("SintaxError")
                }
            }
        }
    }
else {
    alert ("Operación inválida")
} */

/* 
4)
- Agregar soporte para las palabras:
    'sumar', 
    'restar', 
    'multiplicar', '.', 
    'dividir'
*/

/* let operacion = prompt ("Qué operación desea realizar?(+, -, *, /)")
if (operacion === "+" || operacion =="sumar"|| operacion === "-" || operacion =="restar" || operacion === "*" || operacion =="multiplicar" || operacion =="." || operacion === "/" || operacion =="dividir" || operacion ==":") {
    let numero1 = prompt ("Ingrese el primer número")
        if (isNaN(numero1) || !numero1){
            alert ("Inválido")
        }
        else {
            let numero2 = prompt ("Ingrese segundo numero")
            if (isNaN(numero2) || !numero2){
            alert ("Inválido")
            }
            else {
                if (operacion === "+" || operacion == "suma") {
                    alert("El resultado es " + (Number(numero1) + Number(numero2)))
                }
                else if (operacion === "-" || operacion =="restar") {
                    alert("El resultado es " + (Number(numero1) - Number(numero2)))
                }
                else if (operacion === "*" || operacion =="multiplicar" || operacion ==".") {
                    alert("El resultado es " + (Number(numero1) * Number(numero2)))
                }
                else if(operacion === "/" || operacion =="dividir" || operacion ==":") {
                    alert("El resultado es " + (Number(numero1) / Number(numero2)))
                }
            }
        }
    }
else {
    alert ("Operación inválida")
} */



let operacion = prompt ("Qué operación desea realizar?: \nsuma (+) \nresta (-) \nmultiplicar (*) \ndividir (/) \niva \npromediar trimestre (ptr) \nmayor o menos que (>, <) \nporcentaje  (%)")
if (operacion === "+" || operacion =="sumar"|| operacion === "-" || operacion =="restar" || operacion === "*" || operacion =="multiplicar" || operacion =="." || operacion === "/" || operacion =="dividir" || operacion ==":") {
    let numero1 = prompt ("Ingrese el primer número")
        if (isNaN(numero1) || !numero1){
            alert ("Inválido")
        }
        else {
            let numero2 = prompt ("Ingrese segundo numero")
            if (isNaN(numero2) || !numero2){
            alert ("Inválido")
            }
            else {
                if (operacion === "+" || operacion == "suma") {
                    alert("El resultado es " + (Number(numero1) + Number(numero2)))
                }
                else if (operacion === "-" || operacion =="restar") {
                    alert("El resultado es " + (Number(numero1) - Number(numero2)))
                }
                else if (operacion === "*" || operacion =="multiplicar" || operacion ==".") {
                    alert("El resultado es " + (Number(numero1) * Number(numero2)))
                }
                else if(operacion === "/" || operacion =="dividir" || operacion ==":") {
                    alert("El resultado es " + (Number(numero1) / Number(numero2)))
                }
            }
        }
    }
else if (operacion =="iva" || operacion=="IVA" || operacion=="Iva") {
    let precio = prompt("introduzca el precio del producto")
    if (isNaN(precio) || !precio){
            alert ("Inválido")
        }
        else {
            let tipo_de_factura = prompt ("Tipo de factura, puede ser A o B")
            if (tipo_de_factura =="A" || tipo_de_factura =="a"){
            alert("El Importe de IVA es de $ARS "+(Number(precio)*0.21)+" y el precio del producto es $ARS "+(precio))
            }
            else if(tipo_de_factura =="B" || tipo_de_factura =="b"){
                    alert(("El precio del producto con IVA incluido es de $ARS ")+(Number(precio)+(Number(precio)*0.21)))
                }
            else {
                alert("El Tipo De Factura no es válido")
            }
        }
    }
else if (operacion == "Promediar Trimestre" || operacion == "promediar trimestre"|| operacion == "PTR" || operacion == "ptr"){
    let nota_1 = prompt ("Ingrese la primera nota")
        if (isNaN(nota_1) || !nota_1){
            alert ("Inválido")
        }
        else {
            let nota_2 = prompt ("Ingrese la segunda nota")
            if (isNaN(nota_2) || !nota_2){
            alert ("Inválido")
            }
            else {
                let nota_3 = prompt ("Ingrese la tercer nota")
                if (isNaN(nota_3) || !nota_3){
                    alert ("Inválido")
                }
                else {
                    alert ("El promedio del trimestre es de "+((Number(nota_1)+Number(nota_2)+Number(nota_3))/3))
                }
            }  
        }
    }
else if (operacion == "es mayor" || operacion == ">" || operacion =="es menor" || operacion == "<"){
    let num1 = prompt ("Ingrese el primer número")
        if (isNaN(num1) || !num1){
            alert ("Inválido")
        }
        else {
            let num2 = prompt ("Ingrese segundo numero")
            if (isNaN(num2) || !num2){
            alert ("Inválido")
            }
            else {
                if (num1>num2){
                    alert ("El número "+String(num1)+" es mayor(>) que el número "+String(num2))
                }
                else if (num1<num2){
                    alert ("El número "+String(num1)+" es menor(<) que el número "+String(num2))
                }
                else if (num1==num2){
                    alert ("El número "+String(num1)+" es igual(=) al número "+String(num2))
                }
            }
        }
    }
else if (operacion == "porcentaje" || operacion == "%"){
    let num1 = prompt ("Ingrese el porcentaje")
        if (isNaN(num1) || !num1){
            alert ("Inválido")
        }
        else {
            let num2 = prompt ("Ingrese el total")
            if (isNaN(num2) || !num2){
            alert ("Inválido")
            }
            else {
                alert ("El "+(num1)+"% de "+(num2)+" es "+(Number(num2)*(Number(num1)/100)))
            }
        }
    }
else {
    alert ("Operación inválida")
}