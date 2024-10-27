// const cidades = ['Pelotas'] // declara e define conteúdo inicial do vetor
// console.log(cidades)

// cidades.push('São lourenço') // adiciona cidade no final do vetor
// console.log(cidades)

// cidades.unshift('Porto Alegre') // adiciona ao início e desloca as demais
// console.log(cidades)

// const ultima = cidades.pop() // remove o último elemento do vetor
// console.log(cidades)

// const primeira = cidades.shift() // remove o primeiro elemento e sobe os demais.
// console.log(cidades)



// const letras = ['A', 'B', 'C', 'D'] // declara e define conteúdo inicial do vetor
// const letras2 = letras.slice(-2) // obtém os 2 últimos elementos
// const letras3 = letras.slice(0, -1) // obtém do início até o penultimo
// console.log(letras)
// console.log(letras2)
// console.log(letras3)

// const retira = letras.splice(2, 1) // remove a partir da posição 2, um elemento.
// console.log(letras)
// console.log(retira)


const cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre']
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}
    console.log('-'.repeat(40)) // cria uma repetição de 40 traços ' - ' formando uma linha.
    console.log(cidades.toString()) //separa por virgula
    console.log(cidades.join(' - ')) //indicamos qual caractere vai separar os elementos

    console.log('-'.repeat(40))

//For..of e forEach()

for (const cidade of cidades) {
    console.log(cidade)
}

cidades.forEach((cidade, i) => {
    console.log(`${i+1}º Cidade: ${cidade}`)
})

console.log('-'.repeat(40))

const numeros = [5, 10, 15, 20]
let soma = 0
numeros.forEach(num => soma += num)
console.log(`Soma dos números ${soma}`)