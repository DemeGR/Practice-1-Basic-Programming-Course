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

//seleccionar numero de jugadores
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

//Tirar dado
function caraDado(){
    

    dadoJugador = aleatorio(1,6)                   //genera numeros aleatorios entre 1 y 6
    casillasJugador = casillasJugador + dadoJugador

    serpientesYescaleras()

    //if(casillasJugador < 50){
       // parrafo.innerHTML = 'Tiraste un '+ dadoJugador +' y has avanzado ' +casillasJugador +' casillas.'
    //}else{
   //     parrafo.innerHTML = 'Tiraste un '+ dadoJugador +' y llegaste a la meta.' 
   // }
    

}

function serpientesYescaleras(){
    switch(casillasJugador){
        case 3://escaleta
            casillasJugador = 39 
            crearMensaje(' .Escalera(3-39) y has avanzado a la casilla ')
        break;

        case 13://serpiente
            casillasJugador = 10
            crearMensaje(' .Serpiente(13-10) y has regresaso a la casilla ')
        break;

        case 16://escalera
            casillasJugador = 48
            crearMensaje(' .Escalera(16-48) y has avanzado a la casilla ')
        break;

        case 35://escalera
            casillasJugador = 44
            crearMensaje(' .Escalera(35-44) y has avanzado a la casilla ')
        break;

        case 38://serpiente
            casillasJugador = 5
            crearMensaje(' .Serpiente(38-5) y has regresaso a la casilla ')
        break;

        default:
            if(casillasJugador >= 50){
                crearMensajeFinal("Tiraste un "+ dadoJugador+" ¡GANASTE!")
            }else{
                crearMensaje(' y has avanzado(casillas) ') 
            }
            
        break;    
    }

} 

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tiraste un '+ dadoJugador + resultado +casillasJugador 
    sectionMensaje.appendChild(parrafo)
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

//Reiniccar juego
function reiniciarJuego(){
    location.reload()
}