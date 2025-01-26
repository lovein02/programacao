const prompt = require ("prompt-sync")() // adiciona o pacote ao programa
const salario = Number(prompt("Salário: ")) // lê os dados de entrada
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Number(Math.floor(tempo / 4)) //calcula quadriênios
const acrescimo = Number(salario * quadrienios / 100) // calcula quadriénios e acrescimo
console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`)