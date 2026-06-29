let jogador = {
    nickname: "L1bertyW0lf",
    nivel: 10000.99,
    moedas: 10001,
    energia: 8,
    premium: false,
}

console.log(" ")
console.log("==== STATUS INICIAL ====")
console.log(`Jogador: ${jogador.nickname}`)
console.log(`Nível: ${jogador.nivel}`)
console.log(`Moedas: ${jogador.moedas}`)
console.log(`Energia: ${jogador.energia}`)
console.log(`Premium: ${jogador.premium}`)

jogador.nivel = 10001
jogador.moedas = 0.01
jogador.energia = 1000000000000000
jogador.premium = true

console.log(" ")
console.log("==== STATUS INICIAL ====")
console.log(`Jogador: ${jogador.nickname}`)
console.log(`Nível: ${jogador.nivel}`)
console.log(`Moedas: ${jogador.moedas}`)
console.log(`Energia: ${jogador.energia}`)
console.log(`Premium: ${jogador.premium}`)
