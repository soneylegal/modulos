// const GerenciadorTarefas = require('./gerenciadorTarefas');

// const gerenciador = new GerenciadorTarefas();

// gerenciador.adicionarTarefa('Estudar JavaScript');
// gerenciador.adicionarTarefa('Fazer exercícios de programação');
// gerenciador.listarTarefas();

// gerenciador.removerTarefa(0); // Remove a primeira tarefa
// gerenciador.listarTarefas();
const GerenciadorTarefas = require('./gerenciadorTarefas')
const gerenciador = new GerenciadorTarefas()
gerenciador.adicionarTarefa('Fazer exercícios de programação')
gerenciador.listarTarefas()
gerenciador.removerTarefa(0) // remove a primeira tarefa
gerenciador.listarTarefas()