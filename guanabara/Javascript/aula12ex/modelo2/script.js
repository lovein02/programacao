function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}Horas`
    if (hora >= 6 && hora <12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#80ffaa'
        // BOM DIA!
    } else if(hora >= 12 && hora <18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e65c00'
        // Boa tarde
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#00004d'
        //Boa noite
    }
}
