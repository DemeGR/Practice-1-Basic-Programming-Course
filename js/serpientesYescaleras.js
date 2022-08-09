//Variables globales 
let casillasJugador = 0
let dadoJugador = 0

//Carga todo el contenido del HTML
window.addEventListener('load', iniciarJuego )

//Solo muestra la parte de seleccionar numero de jugadores
function iniciarJuego(){
    let sectionPartido = document.getElementById('section-partido')
    sectionPartido.style.display = 'none'                          //oculta la parte de seccion partido

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'                         //oculta el boton reiniciar

    let sectionTirarDado = document.getElementById('tirar-dado')
    sectionTirarDado.style.display = 'none'                          //oculta el boton tirar dado        

    let botonNumJugador = document.getElementById('boton-jugador')
    botonNumJugador.addEventListener('click', seleccionarNumJugador)    //escucha el boton seleccionar

    let boton1Dado = document.getElementById('1-dado')
    boton1Dado.addEventListener('click', caraDado)                      //escucha el boton tirar dado con un click 

    let botonReiniciar = document.getElementById('boton-reiniciar')     //escucha el boton reiniciar 
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarNumJugador(){
    let sectionSeleccionarJugadores = document.getElementById('seleccionar-jugadores')
    sectionSeleccionarJugadores.style.display = 'none'              //oculta la parte de selecionar jugadores

    let sectionTirarDado = document.getElementById('tirar-dado')
    sectionTirarDado.style.display = 'none'                         //oculta la parte de tirar dado

    let sectionPartido = document.getElementById('section-partido')
    sectionPartido.style.display = 'block'                          //muestra la seccion de partido 

    let input1Jugador = document.getElementById('1-jugador')
    let spanNumJugar = document.getElementById('1jugador')

    if(input1Jugador.checked){
        spanNumJugar.innerHTML = '1 jugador'
    }else{
        alert('Selecciona un numero de jugadores')
        
    }
}


function caraDado(){
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')

    dadoJugador = aleatorio(1,6)
    casillasJugador = casillasJugador + dadoJugador

    if(casillasJugador < 50){
        parrafo.innerHTML = 'Tiraste un '+ dadoJugador +' y has avanzado ' +casillasJugador +' casillas.'
    }else{
        parrafo.innerHTML = 'Tiraste un '+ dadoJugador +' y llegaste a la meta.' 
    }
    
    

    sectionMensaje.appendChild(parrafo)

    meta()
}

function meta(){
    if(casillasJugador >= 50){
        crearMensajeFinal("¡GANASTE!")
    }else{
        
    }
        
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let boton1Dado = document.getElementById('1-dado')
    boton1Dado.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)

}

function reiniciarJuego(){
    location.reload()
}