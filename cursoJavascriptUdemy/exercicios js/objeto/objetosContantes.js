// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Euclides'
console.log(pessoa)

//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //trava qualquer alteração que possa ser feito no objeto pessoa
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

// criando um objeto cosntante que não pode ser alterado

const pessoaConstante = Object.freeze({ nome: "Joao"})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)