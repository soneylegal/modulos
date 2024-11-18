const prompt = require('prompt-sync')()
const conversorTemperatura = require('./conversosTemperatura')
let temperatura = parseFloat(prompt("Temperatura: "))
let escala = prompt("Qual escala? ")
if (escala === "C") {
    let resultado = conversorTemperatura.CparaF(temperatura)
    console.log(`${temperatura}°C é igual a ${resultado.toFixed(2)}°F`)
} else if (escala === "F") {
    let resultado = conversorTemperatura.FparaC(temperatura)
    console.log(`${temperatura}°F é igual a ${resultado.toFixed(2)}°C`)
} else {
    console.log("Escala invalida")
}
