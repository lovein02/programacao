const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//metodo pop remove o ultimo indice do array
pilotos.pop()
console.log(pilotos)
//metodo push, adiciona no ultimo indice do array
pilotos.push('Verstappen')
console.log(pilotos)
//metodo shift remove o primeiro indice
pilotos.shift()
console.log(pilotos)
//adiciona no primeiro indice
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar ou remover elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', "Massa")
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

// corta a partir do indice informado e gera um novo array

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// pega do indice 1 até o indice 4 ( o indice 4 não aparece..)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)