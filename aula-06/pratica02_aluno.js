let produto = {
    nome: "Liberdade",
    preco: 10000.99,
    estoque: 1,
    disponivel: true
}

console.log(" ")
console.log("==== PRODUTO ANTES DA VENDA ====")
console.log(`Produto: ${produto.nome}`)
console.log(`Preço: ${produto.preco}`)
console.log(`Estoque: ${produto.estoque}`)
console.log(`Disponível: ${produto.disponivel}`)

produto.preco = 10000.98
produto.estoque = 0
produto.disponivel = false

console.log(" ")
console.log("==== PRODUTO DEPOIS DA VENDA ====")
console.log(`Produto: ${produto.nome}`)
console.log(`Novo Preço: ${produto.preco}`)
console.log(`Novo Estoque: ${produto.estoque}`)
console.log(`Disponível: ${produto.disponivel}`)

let cliente = "Libertô"
console.log (`Venda realizada para o cliente: ${cliente}`)