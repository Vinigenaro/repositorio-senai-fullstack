class Aluno {
    nome: string
    nota1: number
    nota2: number

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2
    }

    verificarSituacao(): "Aprovado" | "Reprovado" {
        if (this.calcularMedia() >= 6) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
    }

    exibirInformacoes(): void {
        console.log(this.nome)
        console.log(this.calcularMedia())
        console.log(this.verificarSituacao())
    }
}

let alunos = [
    new Aluno("Tiago Sabido da Silva", 6, 7),
    new Aluno("Vinicius ChatGPT de Guimarães", 8, 9),
    new Aluno("BMW 320I", 5, 7),
]

for (const aluno of alunos) {
    aluno.exibirInformacoes()
    console.log("---------------")
}
