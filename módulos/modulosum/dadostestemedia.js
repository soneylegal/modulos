// Crie outro módulo chamado relatorio.js que:

// Importe os dados do módulo dados.js.
// Calcule e exiba a média de idade e salário.
// Liste os nomes dos funcionários com salários acima de um valor fornecido como argumento.

// const funcionarios = require('./dados');

// class Relatorio {
//     // Método para calcular e exibir a média de idade e salário
//     calcularMedias() {
//         const totalFuncionarios = funcionarios.length;

//         const totalIdades = funcionarios.reduce((soma, func) => soma + func.idade, 0);
//         const totalSalarios = funcionarios.reduce((soma, func) => soma + func.salario, 0);

//         const mediaIdade = totalIdades / totalFuncionarios;
//         const mediaSalario = totalSalarios / totalFuncionarios;

//         console.log(`Média de Idade: ${mediaIdade.toFixed(2)} anos`);
//         console.log(`Média de Salário: R$${mediaSalario.toFixed(2)}`);
//     }

//     // Método para listar nomes dos funcionários com salários acima de um valor
//     listarSalariosAcima(valor) {
//         console.log(`Funcionários com salário acima de R$${valor.toFixed(2)}:`);
//         const acimaDoValor = funcionarios.filter(func => func.salario > valor);

//         if (acimaDoValor.length === 0) {
//             console.log('Nenhum funcionário encontrado.');
//         } else {
//             acimaDoValor.forEach(func => console.log(`- ${func.nome}`));
//         }
//     }
// }

// module.exports = Relatorio;
const funcionarios = require('./dados')
class Relatorio {
    //metodo para calcular e exibir a média de idade e salário
    calcularMedias() {
        const totalFuncionarios = funcionarios.length
        const totalIdades = funcionarios.reduce((soma, func) => soma + func.idade, 0)
        const totalSalarios = funcionarios.reduce((soma, func) => soma + func.salario, 0)
        const mediaIdade = totalIdades / totalFuncionarios
        const mediaSalario = totalSalarios / totalFuncionarios

        console.log(`Média de idade: ${mediaIdade.toFixed(2)} anos`)
        console.log(`Média de salário: $${mediaSalario.toFixed(2)}`)
    }
    //método para listar nomes dos funcionários com salários acima de um valor
    listarSalariosAcima(valor) {
        console.log(`Funcionários com salário acima de $${valor.toFixed(2)}:`)
        const acimaDoValor = funcionarios.filter(func => func.salario > valor)
        if (acimaDoValor.length === 0) {
            console.log('Nenhum funcionário encontrado.')
        } else {
            acimaDoValor.forEach(func => console.log(`- ${func.nome}`))
        }
    }
}
module.exports = Relatorio
