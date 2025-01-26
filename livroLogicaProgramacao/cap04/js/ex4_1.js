const frm = document.querySelector('form')
const res = document.querySelector('h3')
const res1 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const resp1 = Number(frm.inNota1.value)
    const resp2 = Number(frm.inNota2.value)
    const media = (resp1 + resp2) / 2
    res.innerText = `Média das notas ${media.toFixed(2)}`
    if (media >= 7) {
        res1.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        res1.style.color = 'blue'
    } else if (media >= 4){
        res1.innerText = `Atenção ${nome}. Você está em exame`
        res1.style.color = 'green'
    }
    
    else {
        res1.innerText = `Ops... Você foi reprovado(a)`
        res1.style.color = 'red'
    }

})