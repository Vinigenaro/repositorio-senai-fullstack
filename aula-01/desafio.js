let nome = "Eduarda"
let pesoKG = -10
let alturaM = 1.8

let IMC = pesoKG / (alturaM * alturaM)

if (IMC < 18.5) {
    console.log("Abaixo do peso")
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Peso normal")
} else if (IMC >= 25 && IMC < 30) {
    console.log("Sobre peso")
} else if (IMC >= 30) {
    console.log("Obesidade")
}
