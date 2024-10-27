const aprovados = ['Agatha', 'Aldo','Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(indice +1, nome))

const exibirAprovados = (aprovado, indice) => console.log(`${indice +1}) ${aprovado}`)
aprovados.forEach(exibirAprovados)