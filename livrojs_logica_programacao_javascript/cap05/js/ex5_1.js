const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value) // obtem numero informado
    let resposta = '' // variável do tipo string, para concatenar a resposta
    for (let i = 1; i <= 10; i++) { // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        //resposta = resposta + numero + "x" + i + " = " + (numero * i) + "\n" ou 
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }
    resp.innerText = resposta
})