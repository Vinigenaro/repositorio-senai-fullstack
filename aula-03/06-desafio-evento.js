let idade = 16
let temIngresso = true
let ehAlunoSENAI = false
let horaChegada = 19
let vagasDisponiveis = 5
let codigoIngresso = "PADRAO" // VIP, PADRAO, CONVIDADO

if (idade < 14 && temIngresso) {
    console.log("Entrada Negada!")
} else if (!temIngresso) {
    console.log("Comprar ingresso!")
} else if (vagasDisponiveis === 0) {
    console.log("Evento lotado!")
} else if (horaChegada > 20) {
    console.log("Entrada encerrada.")
} else {
    console.log("Entrada liberada!")
}

switch (codigoIngresso) {
    case "VIP":
        break

    case "CONVIDADO":
        break

    case "PADRAO":
        if (ehAlunoSENAI === true) {
            console.log("Aluno ganhou desconto de 15% :)")
        }
        break

    default:
        console.log("Tipo de ingresso inválido!")
        break
}

console.log("Idade:", idade)
console.log("Tipo de ingresso", codigoIngresso)
