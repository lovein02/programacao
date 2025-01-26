const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

   let resposta = "" // variável que vai acumular o número repetido das frutas

   for(let i = 1; i < num; i++) {
    resposta = resposta + fruta + "*" // ... a cada volta, adiciona uma fruta e o " * "
   }
   resp.innerText = resposta + fruta  // a última fruta é acrescentada, sem o * no final
})