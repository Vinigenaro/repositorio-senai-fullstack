// Definição das informações dos alunos
let nomes = ["Ana", "William", "Elibertô", "Frida", "Hoppert"]
let notas = [3, 10, 6, 7, 8]
let frequencia = [75, 100, 76, 82, 93]

// Mostrar as informações de todos os alunos
for (let i = 0; i < nomes.length; i++) {
    const nomeAluno = nomes[i]
    const notaAluno = notas[i]
    const frequenciaAluno = frequencia[i]

    console.log(`Posição: ${i}`)
    console.log(`Nome: ${nomeAluno}`)
    console.log(`Nota: ${notaAluno}`)
    console.log(`Frequência: ${frequenciaAluno}%`)

    // Define se o aluno foi aprovado, reprovado ou está de recuperação com base na nota e frequencia
    if (notaAluno >= 7 && frequenciaAluno >= 75) {
        console.log(`Aluno(a) "${nomeAluno}" foi aprovado(a)!`)
    } else if (notaAluno >= 5 && notaAluno < 7 && frequenciaAluno >= 75) {
        console.log(`Aluno(a) "${nomeAluno}" está em recuperação.`)
    } else {
        console.log(`Aluno(a) "${nomeAluno}" foi reprovado(a)!`)
    }

    console.log("----------------------")
}

// Calcular nota Total da turma
let notaTotalTurma = 0
for (let i = 0; i < notas.length; i++) {
    const notaAluno = notas[i]
    notaTotalTurma += notaAluno
}

// Calcula a media da nota da turma dividindo o valor do acumulador pelo comprimento da lista
const mediaTurma = notaTotalTurma / notas.length
console.log(`Média turma: ${mediaTurma.toFixed(2)}`)
console.log("----------------------")

// Menu com opções indo de 1 a 4.
let opcao = 4
switch (opcao) {
    case 1:
        const nomeAluno = nomes[i]
        const notaAluno = notas[i]
        const frequenciaAluno = frequencia[i]

        console.log(`Posição: ${i}`)
        console.log(`Nome: ${nomeAluno}`)
        console.log(`Nota: ${notaAluno}`)
        console.log(`Frequência: ${frequenciaAluno}%`)

        if (notaAluno >= 7 && frequenciaAluno >= 75) {
            console.log(`Aluno(a) "${nomeAluno}" foi aprovado(a)!`)
        } else if (notaAluno >= 5 && notaAluno < 7 && frequenciaAluno >= 75) {
            console.log(`Aluno(a) "${nomeAluno}" está em recuperação.`)
        } else {
            console.log(`Aluno(a) "${nomeAluno}" foi reprovado(a)!`)
        }

        console.log("----------------------")
        break

    case 2:
        console.log(`Média turma: ${mediaTurma.toFixed(2)}`)
        break

    case 3:
        for (let i = 0; i < notas.length; i++) {
            const nomeAluno = nomes[i]
            const notaAluno = notas[i]
            const frequenciaAluno = frequencia[i]

            if (notaAluno >= 7 && frequenciaAluno >= 75) {
                console.log(`${nomeAluno} aprovado!`)
            } else if (
                notaAluno >= 5 &&
                notaAluno < 7 &&
                frequenciaAluno >= 75
            ) {
                console.log(`${nomeAluno} em recuperação.`)
            } else {
                console.log(`${nomeAluno} reprovado!`)
            }
        }
        break

    case 4:
        console.log(`A turma tem ${nomes.length} alunos.`)
        console.log(`A nota média é ${mediaTurma.toFixed(2)}.`)
        break
}
