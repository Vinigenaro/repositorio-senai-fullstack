let idade = 18
let temCadastro = false
let temResponsavel = true
let bloqueado = false

if (bloqueado) {
    console.log("Acesso negado: usuário bloqueado.")
} else if (!temCadastro) {
    console.log("Acesso negado: cadastro necessário.")
} else if (idade >= 18) {
    console.log("Acesso liberado.")
} else if (idade < 18 && temResponsavel) {
    console.log("Acesso liberado com responsável.")
} else {
    console.log("Acesso negado.")
}
