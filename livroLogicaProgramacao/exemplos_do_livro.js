// const carros = []
// carros.push({modelo: "Sandero", preco: 46500})
// carros.push({modelo: "Palio", preco: 37800})
// for (const carro of carros) {
//     console.log(`${carro.modelo} - R$ ${carro.preco}`)
// }

// const carros = []
// const modelo = "fiesta"
// const preco = 46800
// carros.push({modelo, preco})


// for (const carro of carros) {
//     const {modelo, preco} = carro
//     console.log(`${modelo} - R$: ${preco}`)
// }

const idades = [12, 16, 10, 8]
let maiores = 0
for (const idade of idades) {
    if (idade >= 18) {
        console.log(idade)
        maiores = 1
    }
}
if (!maiores){
    console.log("Não há idade maior que 18 na lista!")
}