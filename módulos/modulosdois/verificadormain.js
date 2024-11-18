const verificador = require('./validador')
const prompt = require('prompt-sync')()

let senha = prompt("senha: ")
if (verificador.verificar(senha)) {
    console.log("Senha válida")
} else {
    console.log("senha inválida")
}