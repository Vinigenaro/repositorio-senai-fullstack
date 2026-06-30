let produto: {
    nome: string
    preco: number
    quantidade: number
    calcularTotal(): number
} = {
    nome: "Mouse",
    preco: 50,
    quantidade: 2,
    calcularTotal: function () {
        return this.preco * this.quantidade
    },
}
console.log(produto.calcularTotal())
