let alunos = [
    { nome: "Libertô", idade: 69, curso: "Técnico em Liberdade" },
    { nome: "Priscila", idade: 96, curso: "Técnico em Aprisionamento" },
    { nome: "Rebeca", idade: 67, curso: "Técnico em Rebelião" },
]

console.log(" ")
console.log("==== LISTA COM FOR ====")
for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno: ${alunos[i].nome} | Idade: ${alunos[i].idade}`)
}

console.log(" ")
console.log("==== LISTA COM FOREACH ====")
