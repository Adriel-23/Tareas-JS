/* Bucles */

/* let numero = prompt ("ingrese un numerito")

if (!numero || isNaN(numero)) {
    alert ("El número no es válido")
    numero = prompt ("ingrese un numerito nuevamente")
    if (!numero || isNaN(numero)) {
        alert ("sos boludo?")
    }
    else {
        alert ("Bien mi gente latino")
    }
} */

/*   let numero = prompt ("Ingrese un númerito")
    
    while (!numero || isNaN(numero)) {
        alert ("Error: el número no es válido")
        numero = prompt ("ingrese un númerito nuevamente") 
        
    }
    alert ("Perfecto señor, eso si es un númerito") */


    /* Solicitar contraseña */

    /* let password_db = ("Freya")

    let password_db_solicitud = prompt ("Ingrese la contraseña")

    while (password_db_solicitud !== password_db){
        if (password_db_solicitud === null){
            alert ("Cancelaste la operación"); 
            break;
        }
        alert ("Contraseña incorrecta")
            password_db_solicitud = prompt ("Ingrese nuevamente la contraseña")
    }
    if (password_db_solicitud === password_db){
    alert ("Contraseña correcta, acceso permitido")
    } */


    /* 
    -Solicitar una operación 
    -Validar que dicha operación sea "Iva" o "Descuento"
        -Si no es, volver a solicitar, a excepción de que el usuario de cancelar, en dicho caso, cancelar el programa y avisar al usuario.
        - Si la operación es "iva" solicitar el número.
            - Válidar el número, en caso de no ser correcto volver a solicitar. (EL número debe ser positivo)
            - Mostrar por alerta el 21% del precio ingresado.
    -Si la operación es: "Descuento" Solicitar un número.
        - Válidar el número, en caso de no ser correcto volver a solicitar (El núimero debe ser positivo)
        - Solicitar número de descuento.
            - Válidar el número de descuento (El número debe ser positivo y menor que 100)
                - Volver a solicitar en caso de ser incorrecto.
                - Mostrar por alerta el porcentaje del número ingresado. Ej:  "El precio con descuento aplicado es de ${Resultado}"
    */

                /* RESOLUCIÓN: */
/*     let operation = prompt ("Indique la operación (iva o desceunto)")
    
        while (operation != "iva" && operation != "Iva" && operation != "IVA" && operation != "descuento" && operation != "Descuento" && operation != "DESCUENTO"){
            if (operation === null){
                alert ("Canceló la operación"); break;
            }
            alert ("Muy mal lo tuyo")
            operation = prompt ("Ingrese nuevamente la operación")
        } 
        if (operation == "iva" || operation == "Iva" || operation == "IVA"){
            let numero = prompt ("Ingrese el precio del producto")
            while (!numero || isNaN(numero) || Number(numero) < 0 ){
                if (numero === null){
                    alert ("Operación cancelada"); break;
                }
                alert ("No ha ingresado un número válido")
                numero = prompt ("Ingrese el precio nuevamente")
            }
            if (numero) {
            let porcentaje_iva = (Number(numero)*0.21)
            alert ("El porcentaje Iva de su producto es $"+(porcentaje_iva)+". El total de su producto es $"+(Number(numero)+Number(porcentaje_iva)))
        }
        }
        else if (operation == "descuento" || operation == "Descuento" || operation == "DESCUENTO"){
            let numero = prompt ("Ingrese el precio del producto")
            while (!numero || isNaN(numero) || Number(numero) < 0 ){
                if (numero === null){
                    alert ("Operación cancelada"); break;
                }
                alert ("No ha ingresado un número válido")
                numero = prompt ("Ingrese el precio nuevamente")
            }
            if(numero){
            let off = prompt("Ingrese el porcentaje de descuento")
            while (!off || isNaN(off) || Number(off) < 0 || Number(off) > 100){
                if (off === null){
                    alert ("Operación cancelada"); break;
                }
                alert ("No ha ingresado un número válido")
                off = prompt ("Ingrese nuevamente un porcentaje en NÚMERO")
            }
            if (off){
            let descuento_aplicado = (Number(numero)*(1-(Number(off)/100)))
            alert ("El precio con el "+off+"% de descuento aplicado es $"+(descuento_aplicado))
            }
            }
        } */


            /* Bucle FOR
    se usa cuando conocemos el límite de repeticiones (Cuantas veces queremos que una acción se repita), es un bucle de conteo ya que tiene un contador interno.
            */

    /* for (
        let contador = 1;
        contador <=4;
        contador = contador+1
    ){
        document.writeln("Hola")
    } */
    
    /*
    Solicitar 3 numeros y acumularlos (sumar)
     */

    /* let suma = 0
    for (
        let contador = 1;
        contador <=3;
        contador = contador+1
    ){
        let numero = prompt("ingrese un número");
        suma = Number(suma) + Number(numero)
    }
    alert ("la sumatoria entre los numeros es "+suma); */

    //Solicitar 3 notas y calcular el promedio.

/*     let suma = 0
    for (
        let contador = 1;
        contador <=3;
        contador = contador+1
    ){
        let notas = prompt("Ingrese sus notas");
        suma = suma+Number(notas)
    }
    promedio = suma/3
    alert ("El promedio de tus notas es "+promedio) */

// la "i" es de iterador, "++" suma de a 1(uno)
/*     let suma = 0
    for (
        let i = 1;
        i <=3;
        i++
    ){
        let notas = prompt("Ingrese sus notas");
        suma = suma+Number(notas)
    }
    promedio = suma/3
    alert ("El promedio de tus notas es "+promedio) */