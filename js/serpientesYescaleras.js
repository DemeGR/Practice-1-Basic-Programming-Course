//Variables globales 
let casillasJugador = 0
let dadoJugador

window.addEventListener('load', iniciarJuego )

function iniciarJuego(){
    let sectionPartido = document.getElementById('section-partido')
    sectionPartido.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.diplay = 'none'

    let sectionTirarDado = document.getElementById('tirar-dado')
    sectionTirarDado.style.diplay = 'none'

    let botonNumJugador = document.getElementById('boton-jugador')
    botonNumJugador.addEventListener('click', seleccionarNumJugador)

    let boton1Dado = document.getElementById('1-dado')
    boton1Dado.addEventListener('click', caraDado)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarNumJugador(){
    let sectionSeleccionarJugadores = document.getElementById('seleccionar-jugadores')
    sectionSeleccionarJugadores.style.display = 'none'

    let sectionTirarDado = document.getElementById('tirar-dado')
    sectionTirarDado.style.diplay = 'none'

    let sectionPartido = document.getElementById('section-partido')
    sectionPartido.style.display = 'block'

    let input1Jugador = document.getElementById('1-jugador')
    let spanNumJugar = document.getElementById('1jugador')

    if(input1Jugador.checked){
        spanNumJugar.innerHTML = '1 jugador'
    }else{
        alert('Selecciona un numero de jugadores')
        
    }
}

function caraDado(){
    dadoJugador = aleatorio(1,6)
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)

}

function reiniciarJuego(){
    location.reload()
}