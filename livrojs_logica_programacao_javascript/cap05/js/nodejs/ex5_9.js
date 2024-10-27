const prompt = require("prompt-sync")()
const produto = prompt("Produto: ") //lê nome do produto e...
const num = Number(prompt("N° de Etiquetas: ")) //quantidade de etiquetas

for (let i =1; i <= num / 2; i++) {     //Cria um laço de repetição até num/2 (pois imprime 2 etiquetas por linha)
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 ==1){ // se quantidade solicitada de etiquetas for impar...
    console.log(produto) // imprimi mais etiquetas
}