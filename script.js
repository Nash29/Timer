
/*function mudarCor(){

    let h = document.getElementsByTagName('h1')[0]
    h.style.color = 'blue'

}*/

var numero = 0

var interval

function atualizarText(){
    
    let h = document.getElementsByTagName('h1')[0]

    h.innerHTML += ' ' + numero
    numero++


}

/*
function mudarText(){

    let h = document.getElementsByTagName('h1')[0]

    //h.innerHTML = 'Novo Titulo'

    // timer é em milisegundo então 1000 seria 1 seg
    //setTimeout(mudarCor, 3000)

    setInterval(atualizarText ,3000)
}*/


function iniciar(){

    interval = setInterval(atualizarText, 1000)

}

function parar(){

    clearInterval(interval)

}