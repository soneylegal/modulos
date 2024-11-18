// Atividade 2: Módulo de Saudações
// Crie um módulo chamado saudacoes.js que:

// Contenha uma função que receba o nome de uma pessoa e retorne uma saudação personalizada (exemplo: "Olá, [nome]!").
// No main.js, importe o módulo e:

// Use a função para saudar diferentes nomes e exiba as saudações no console.
// Função para gerar uma saudação personalizada
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Exportando a função para ser usada em outros arquivos
module.exports = {saudacao}