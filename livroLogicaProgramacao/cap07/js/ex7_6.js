const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const senha = frm.inSenha.value
    const erros = []

    if(senha.length < 8 || senha.length >15){
        erros.push("Possuir entre 8 e 15 caracteres")
    }


if(senha.match(/[0-9]/g) == null){
    erros.push("possuir no mínimo 1 número.")
}

if(!senha.match(/[a-z]/g) == null){
    erros.push("possuir no mínimo 1 letra minúscula")
}

if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
    erros.push("possuir 2 letras maiúsculas")
}

if(!senha.match(/[\W|_]/g)){
    erros.push("possuir no mínimo 1 simbolo")
}

if(erros.length == 0){
    resp.innerText = "Ok! senha válida"
} else {
    resp.innerText = `Erro... A senha deve ${erros.join(", ")}`
}

})