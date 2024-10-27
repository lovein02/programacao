// const prod1 = {
//     nome: '...',
//     preco: 45
// }

// const prod2 = {
//     nome: '...',
//     preco: 50
// }


// como fazer do jeito certo

// Factory simples

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())