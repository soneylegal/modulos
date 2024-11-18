// Atividade 5: Validador de Senhas
// Crie um módulo chamado validador.js que:

// Tenha uma função para verificar se uma senha é válida (exemplo: deve ter no mínimo 8 caracteres).
// No main.js, importe o módulo e:

// Peça ao usuário (via prompt) para inserir uma senha e valide-a usando o módulo.
function verificar(senha) {
    if (senha.length >= 8) {
        return true
    } else {
        return false
    }
}
module.exports = { verificar }