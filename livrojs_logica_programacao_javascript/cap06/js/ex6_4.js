const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const criancas = [] //declara vetor global

frm.addEventListener("submit",(e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = frm.inIdade.value
    criancas.push({nome, idade}) // adiciona dados ao vetor de objetos
    frm.reset() //limpa campos do form
    frm.inNome.focus() //posiciona no campo de formulário
    frm.btListar.dispatchEvent(new Event("click"))  //dispara click em btlistar
})

frm.btListar.addEventListener("click", ()=> {
    if (criancas.length == 0){
        alert("Não há Crianças na lista")
        return
    }
let lista = "" //para concatenar lista de crianças
for (const crianca of criancas) {
    const {nome, idade} = crianca // desestrutura o objeto
    lista += nome + " - " + idade + " anos\n"
}
resp.innerText = lista
})

frm.btResumir.addEventListener("click", () => {
    if(criancas.length == 0){
        alert("Não há Crianças na lista")
        return
    }
    const copia = [...criancas] //cria copia do vetor criancas
    copia.sort((a,b) => a.idade - b.idade) // ordena pela idade
    let resumo = "" //para concatenar saida
    let aux = copia[0].idade // menor idade do vetor ordenado
    let nomes = [] // para inserir nomes de cada idade
    for (const crianca of copia){
        const {nome, idade} = crianca
        if(idade == aux) { //se é da mesma idade auxiliar..
            nomes.push(nome) //adiciona ao vetor nomes
        }else{
            resumo += aux + " anos(s): " + nomes.length + "criancas(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(",") + ")\n\n"
            aux = idade //obtém a nova idade da ordem
            nomes = []
            nomes.push(nome) // adiciona o primeiro da nova idade
        }
    }
    //adiciona a última crianca
    resumo += aux + " ano(s): " + nomes.length + "criança(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo // exibe as resposta
})