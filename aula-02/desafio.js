let nomeAluno = "Ana"
let notaUm = 9.0
let notaDois = 9.0
let frequencia = 70
let atividadesEntregues = true
let estaBloqueado = false

const mediaNotas = (notaUm + notaDois) / 2

const aprovado = mediaNotas >= 6 && frequencia >= 75 && atividadesEntregues === true
const aprovadoDestaque = mediaNotas >= 9 && frequencia >= 60


console.log(`Aluno: ${nomeAluno}`)
console.log(`Média: ${mediaNotas}`)
console.log(`Frequência: ${frequencia}%`)
console.log(`Atividades entregues: ${atividadesEntregues ? "Sim" : "Não"}`)

if (estaBloqueado) {
    console.log("Situação final: Reprovado")
} else if (aprovado) {
    console.log("Situação final: Aprovado")
} else if (aprovadoDestaque) {
    console.log("Situação final: Aprovado por destaque")
}
