class Carro {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    exibirDetalhes(): void {
        console.log(`${this.marca} ${this.modelo} - ${this.ano}`)
    }
}

let carro = new Carro("Hyundai", "HB20", 2017)
carro.exibirDetalhes()
