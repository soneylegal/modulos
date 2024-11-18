// const Tarefa = require('./tarefa');

// const tarefa1 = new Tarefa('Estudar JavaScript');
// console.log(tarefa1); // { descricao: 'Estudar JavaScript', concluida: false }

// tarefa1.marcarComoConcluida();
// console.log(tarefa1); // { descricao: 'Estudar JavaScript', concluida: true }
const Tarefa = require('./tarefa')
const tarefa1 = new Tarefa("Estudar Javascript")
console.log(tarefa1)
tarefa1.marcarComoConcluida()
console.log(tarefa1)