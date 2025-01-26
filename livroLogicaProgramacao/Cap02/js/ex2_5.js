// chamar a refêrencia
const frm = document.querySelector('form')
const resp = document.querySelector('h3')
// chamar os valores
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promocao = Math.round(preco) * 2
    resp.innerText = `Leve 2 por apenas R$: ${promocao}`
    e.preventDefault()
})