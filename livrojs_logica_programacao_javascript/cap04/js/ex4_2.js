const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2) //Operador ternário
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} KG`
    frm.addEventListener('reset', () => {
    resp.innerText = ""
    })
    /*let peso // declara a variável peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} KG`
frm.addEventListener('reset', () => {
    resp.innerText = "" // limpa o conteúdo do elemento h3 que exibe a resposta*/
    //em comentario está exemplo de operador logico


    
})