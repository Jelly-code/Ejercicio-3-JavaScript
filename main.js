alert("Bienvenida al sistema, ingrese sus datos porfavor")


let nombre = prompt("Nombre")
let apellido = prompt("Apellido")
let edad = prompt("Edad")
let nacionalidad = prompt("Nacionalidad")
let documento = prompt("DNI")

let datosPersonales = nombre + " " + apellido + ", " + edad + " años, " + nacionalidad + ", " + documento

alert(`Nuevo usuario ingresado al sistema: ` + datosPersonales)

