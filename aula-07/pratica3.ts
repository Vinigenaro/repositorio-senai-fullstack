function calcularDesconto(preco: number, desconto: number): number {
    return preco * (1 - desconto / 100)
}

console.log(calcularDesconto(100, 10))
