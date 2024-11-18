// // Crie outro módulo chamado gerenciadorTarefas.js que permita:

// // Adicionar uma tarefa.
// // Listar todas as tarefas.
// // Remover uma tarefa pelo índice.
// // gerenciadorTarefas.js

// const Tarefa = require('./tarefa');

// class GerenciadorTarefas {
//     constructor() {
//         this.tarefas = []; // Array para armazenar as tarefas
//     }

//     // Método para adicionar uma nova tarefa
//     adicionarTarefa(descricao) {
//         const novaTarefa = new Tarefa(descricao);
//         this.tarefas.push(novaTarefa);
//         console.log(`Tarefa adicionada: "${descricao}"`);
//     }

//     // Método para listar todas as tarefas
//     listarTarefas() {
//         console.log('Lista de Tarefas:');
//         if (this.tarefas.length === 0) {
//             console.log('Nenhuma tarefa disponível.');
//         } else {
//             this.tarefas.forEach((tarefa, index) => {
//                 const status = tarefa.concluida ? 'Concluída' : 'Pendente';
//                 console.log(`${index}. ${tarefa.descricao} - ${status}`);
//             });
//         }
//     }

//     // Método para remover uma tarefa pelo índice
//     removerTarefa(indice) {
//         if (indice < 0 || indice >= this.tarefas.length) {
//             console.log('Índice inválido. Nenhuma tarefa removida.');
//             return;
//         }
//         const tarefaRemovida = this.tarefas.splice(indice, 1);
//         console.log(`Tarefa removida: "${tarefaRemovida[0].descricao}"`);
//     }
// }

// module.exports = GerenciadorTarefas;
const Tarefa = require('./tarefa')
class GerenciadorTarefas {
    constructor() {
        this.tarefas = []; // array para armazenar as tarefas
    }
    //método para adicionar uma nova tarefa
    adicionarTarefa(descricao) {
        const novaTarefa = new Tarefa(descricao)
        this.tarefas.push(novaTarefa)
        console.log(`tarefa adicionada: ${descricao}`)
    }
    // método para listar todas as tarefas
    listarTarefas() {
        console.log('Lista de tarefas:')
        if (this.tarefas.length === 0) {
            console.log('Nenhuma tarefa disponível')
        } else {
            this.tarefas.forEach((tarefa, index) => {
                const status = tarefa.concluida ? 'Concluida' : 'Pendente';
                console.log(`${index}. ${tarefa.descricao} - ${status}`)
            })
        }
    }
    //método para remover uma tarefa pelo índice
    removerTarefa(indice) {
        if (indice < 0 || indice >= this.tarefas.length) {
            console.log('Indice inválido. Nenhuma tarefa removida')
            return;
        }
        const tarefaRemovida = this.tarefas.splice(indice, 1);
        console.log(`Tarefa removida: ${tarefaRemovida[0].descricao}`)
    }
}
module.exports = GerenciadorTarefas