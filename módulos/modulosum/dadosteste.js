const funcionarios = require('./dados')

funcionarios.forEach(funcionario => {
    console.log(`${funcionario.nome}, ${funcionario.idade}, ${funcionario.salario}`)
})
