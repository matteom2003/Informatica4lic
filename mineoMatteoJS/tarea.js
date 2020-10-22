let edad;
let nombre;
do{
    nombre = (prompt("nombre: "))
}while ( nombre.length <= 1)
do{
    edad = parseFloat(prompt("Edad: "))
}while (Number.isNaN(edad) || edad <= 0)
if (edad >= 50){
console.log(` Buenos días respetado ${nombre} `)
} else {
    if (edad <= 12){
        console.log(`Hola ${nombre}`)
    }else{
        console.log(`Buenos días ${nombre}`)
    }
}