// Atividade 1: Módulo de Conversão de Temperatura
// Crie um módulo chamado conversorTemperatura.js que:

// Tenha funções para converter:
// Celsius para Fahrenheit.
// Fahrenheit para Celsius.
// No main.js, importe o módulo e:

// Peça ao usuário (via prompt) que insira uma temperatura e a escala de conversão.
// Use as funções do módulo para converter e exibir o resultado no console.
function CparaF (celsius) {
    return (celsius * 9/5 + 32)
}
function FparaC (fahrenheit) {
    return (fahrenheit - 32) * 5/9
}
module.exports = {
    CparaF, FparaC
}