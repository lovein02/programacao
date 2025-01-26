//Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector('form')
const resp = document.querySelector('h3')
// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) // Obtém conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const buffet = (quilo / 1000) * consumo // calcula o valor a ser pago
    resp.innerText = `Valor a pagar R$: ${buffet}` // exibe a resposta
    e.preventDefault()
})