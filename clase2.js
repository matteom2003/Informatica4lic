//variables
let x = 4
let y = 3
console.log(`x + y = ${x+y}`)
//Condicionales
let w;
do{
    w = parseFloat(prompt("Ingrese un numero: "))
}while (Number.isNaN(w))
if (w > 0){
console.log(`${w} es positivo`)
} else {
    if (w < 0){
        console.log(`${w} es negativo`)
    }else{
        console.log(`${w} es cero`)
    }
}