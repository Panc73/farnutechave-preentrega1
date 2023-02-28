//SALUDO INICIAL

function datosPersonales (){
   
    let apellidoNombre = prompt ("Por favor ingresa tu apellido y nombre")
    alert (apellidoNombre + " muchas gracias por utilizar nuestros servicios ")
}

datosPersonales ()

//DATOS DEL VEHICULO. NO INFLUYEN EN EL CALCULO

const MARCA = prompt("Ingresa la marca del vehículo")
const MODELO = prompt("Ingresa el modelo del vehículo")
const AÑO = prompt("Ingresa el año del vehículo")

// CALCULO SEGURO
let numeroDos = 0.30

function multiplicarDosNumeros (numeroUno, numeroDos){
const MULTIPLICACION= numeroUno * numeroDos
alert ("El valor anual de tu seguro es: " + MULTIPLICACION)
alert ("El valor de la cuota mensual es: " + MULTIPLICACION / 12)
}

function solicitarValores(){
numeroUno = parseFloat (prompt("Ingrese el valor del auto"))

}

solicitarValores()
multiplicarDosNumeros (numeroUno, numeroDos)

