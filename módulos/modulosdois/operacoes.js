// Atividade 3: Operações Básicas
// Crie um módulo chamado operacoes.js que:

// Exporte funções para realizar as quatro operações básicas (adição, subtração, multiplicação, divisão).
// No main.js, importe o módulo e:

// Use as funções para calcular e exibir o resultado de algumas operações no console.
function soma(a,b) {
    return a + b
}
function subtracao(a,b) {
    return a - b
}
function multiplicacao(a,b) {
    return a * b
}
function divisao(a,b) {
    if (b === 0) {
        return "Valor invalido"
    }
    return a/b
}
module.exports = {soma,subtracao,multiplicacao,divisao}