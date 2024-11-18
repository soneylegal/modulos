// main.js

// Importando o módulo conversorMoeda
const conversorMoeda = require('./conversorMoedas');

// Valor em reais e taxa de conversão fictícia de 1 real para 0.18 dólares
let valorEmReais = 100;
let taxaDeConversao = 0.18; // 1 real = 0.18 dólares

// Realizando a conversão
let valorEmDolares = conversorMoeda.converterMoeda(valorEmReais, taxaDeConversao);

// Exibindo o resultado da conversão no console
console.log(`${valorEmReais} reais é igual a ${valorEmDolares.toFixed(2)} dólares.`);
