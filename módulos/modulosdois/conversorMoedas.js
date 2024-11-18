// tividade 8: Conversor de Moedas
// Crie um módulo chamado conversorMoeda.js que:

// Tenha uma função para converter valores entre duas moedas, dado um valor e uma taxa de conversão.
// No main.js, importe o módulo e:

// Simule a conversão de um valor em reais para dólares, com uma taxa de conversão fictícia.
// conversorMoeda.js

// Função para converter valores entre duas moedas com base na taxa de conversão
function converterMoeda(valor, taxaConversao) {
    return valor * taxaConversao;
}

// Exportando a função para ser usada em outros arquivos
module.exports = {
    converterMoeda
};
