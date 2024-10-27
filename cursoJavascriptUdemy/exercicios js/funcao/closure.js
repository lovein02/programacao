// Closure é o escopo criado quando uma função e declarada

// esse escopo permite a função acessar e manipular avariáveis externas à função

// contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())