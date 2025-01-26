const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2005' // como o writable está como false, a data não pode ser alterada como se fosse um freeze nessa propriedade
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
//o assign pega os objetos em outras constantes e concatena com o obj de destino ex:

const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(destino, o1, o2)

console.log(obj)