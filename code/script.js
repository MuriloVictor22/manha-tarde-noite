function carregar(){
    let fundo = document.getElementById('principal')
    let mostrarHora = document.getElementById('mostrarHora')
    let imagem = document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    if (minutos < 10){
        mostrarHora.innerText = `${hora}:0${minutos}`
    } else {
        mostrarHora.innerText = `${hora}:${minutos}`
    }

    if (hora >= 6 && hora < 12) {
        imagem.src = '../img/manha.jpg'
        fundo.style.backgroundColor = '#5facb6'
    } else if (hora < 18) {
        imagem.src = '../img/tarde.jpg'
        fundo.style.backgroundColor = '#c7bf4c'
    } else {
        imagem.src = '../img/noite.jpg'
        fundo.style.backgroundColor = '#252525'
    }
}

function mensagem() {
    let mensagem = document.getElementById('mensagem')

    let data = new Date()
    let hora = data.getHours()

    if (hora >= 6 && hora < 12) {
        mensagem.innerText = 'Bom Dia!'
    } else if (hora < 18) {
        mensagem.innerText = 'Boa Tarde!'
    } else {
        mensagem.innerText = 'Boa Noite!'
    }
}