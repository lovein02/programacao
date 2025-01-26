const frm = document.querySelector('form')
const res = document.querySelector('#resp1')
const res2 = document.querySelector('#resp2')

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const promopreco = preco / 2
    const promo = (preco * 2) + promopreco
    res.innerText = `${produto} - Promoção: leve 3 por R$: ${promo}`
    res2.innerText = `O 3° Produto custa apenas R$: ${promopreco}`
    e.preventDefault()
})