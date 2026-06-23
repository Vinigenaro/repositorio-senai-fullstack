let valorCompra = 250
let temCupom = false
let ehAlunoSENAI = true
let formaPagamento = "credito" // pix, credito, boleto

const DESCONTO_CUPOM = 0.1
const DESCONTO_PIX = 0.05
const DESCONTO_BOLETO = 0.02

const VALOR_FRETE = 20

let desconto = 0
if (temCupom || ehAlunoSENAI) {
    desconto += valorCompra * DESCONTO_CUPOM
}

switch (formaPagamento) {
    case "pix":
        desconto += valorCompra * DESCONTO_PIX
        break

    case "boleto":
        desconto += valorCompra * DESCONTO_BOLETO
        break

    case "credito":
        break

    default:
        console.log("Forma de pagamento inválida.")
        break
}

let valorFrete
if (valorCompra >= 200) {
    valorFrete = 0
} else {
    valorFrete = VALOR_FRETE
}

console.log(`Valor original: ${valorCompra}`)
console.log(`Desconto aplicado: ${desconto}`)
console.log(`Frete: ${valorFrete}`)
console.log(`Total a pagar: ${valorCompra + valorFrete - desconto}`)
