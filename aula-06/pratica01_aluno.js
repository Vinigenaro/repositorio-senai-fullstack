let aluno = {
    nome: "Libertô",
    idade: 69,
    curso: "Técnico em Liberdade",
    matriculado: true,
    notaFinal: 10
}

console.log (" ")
console.log("==== CADASTRO ALUNO ====")
console.log (`Nome: ${aluno.nome}`)
console.log (`Idade: ${aluno.idade}`)
console.log (`Curso: ${aluno.curso}`)
console.log (`Matriculado: ${aluno.matriculado}`)
console.log (`Nota Final: ${aluno.notaFinal}`)

aluno.idade = 67
aluno.notaFinal = 11
aluno.matriculado = false

console.log (" ")
console.log ("==== DADOS ATUALIZADOS ====")
console.log (`Nome: ${aluno.nome}`)
console.log (`Nova Idade: ${aluno.idade}`)
console.log (`Matriculado: ${aluno.matriculado}`)
console.log (`Nova Nota Final: ${aluno.notaFinal}`)