// Crie um módulo chamado tarefa.js que contenha uma classe Tarefa com os seguintes atributos:

// descricao (string)
// concluida (boolean, padrão false)
// Um método para marcar a tarefa como concluída.

class Tarefa {
    constructor(descricao) {
        this.descricao = descricao
        this.concluida = false
    }
    marcarComoConcluida() {
        this.concluida = true
    }
}
module.exports = Tarefa;