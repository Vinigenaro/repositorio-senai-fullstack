function calcularMedia(nota1: number, nota2: number, nota3: number): number {
    return (nota1 + nota2 + nota3) / 3
}

function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5 && media <= 7) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}

function exibirBoletim(nome: string, media: number, situacao: string): void {
    console.log(`Aluno(a): ${nome}`)
    console.log(`Média: ${media}`)
    console.log(`Situação: ${situacao}`)
}

let media = calcularMedia(8, 7, 6)
let situacao = verificarSituacao(media)
exibirBoletim("Ana", media, situacao)
