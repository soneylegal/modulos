// Atividade 4: Gerador de Números Aleatórios
// Crie um módulo chamado aleatorio.js que:

// Tenha uma função para gerar um número aleatório entre dois valores fornecidos como argumentos.
// No main.js, importe o módulo e:

// Gere e exiba três números aleatórios no console.
function gerarNumeroAleatorio (min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

module.exports = {gerarNumeroAleatorio}