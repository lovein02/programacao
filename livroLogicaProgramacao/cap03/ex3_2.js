const prompt = require("prompt-sync")() // adiciona o pacote ao programa
const veiculo = prompt("Veiculo: ") // le os dados de entrada
const preco = Number(prompt("Preço: "))
const entrada = preco * 0.50 //calcula o valor da entrada
const parcela = (preco * 0.50) / 12 // calcula o valor da entrada e das parcelas
console.log(`Promoção: ${veiculo}`) // exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`12x de R$ ${parcela.toFixed(2)}`)

