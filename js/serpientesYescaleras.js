//Variables globales 
let casillasJugador = 0
let casillasPC = 0
let dadoJugador = 0
let bandera = 0
let resultadoJugador
let resultadoPC = "Nada "
let resultadoSYE
let resultadoCasilla = 0
let partidoTerminado = 0

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
    sectionPartido.style.display = 'none'                          //muestra la seccion de partido 

    let input1Jugador = document.getElementById('1-jugador')
    let input2Jugadores = document.getElementById('2-jugadores')
    let spanNumJugares = document.getElementById('jugadores')

    if(input1Jugador.checked){
        spanNumJugares.innerHTML = '1 jugador.'
        sectionPartido.style.display = 'block' 
    }else if(input2Jugadores.checked){
        spanNumJugares.innerHTML = '2 jugadores.'
        bandera = 1
        sectionPartido.style.display = 'block' 
    }else{
        alert('Selecciona un numero de jugadores')
        sectionSeleccionarJugadores.style.display = 'block'  
        
    }
}

//Tirar dado
function caraDado(){
    
    dadoJugador = aleatorio(1,6)                   //genera numeros aleatorios entre 1 y 6
    casillasJugador = casillasJugador + dadoJugador
    resultadoCasilla = casillasJugador
    serpientesYescaleras()
    casillasJugador = resultadoCasilla
    resultadoJugador = resultadoSYE

    if(partidoTerminado == 1){
        crearMensajeFinal()
    }else{
        if(bandera == 1){
            dadoJugador = aleatorio(1,6)                   //genera numeros aleatorios entre 1 y 6
            casillasPC = casillasPC + dadoJugador
            resultadoCasilla = casillasPC
            serpientesYescaleras()
            casillasPC = resultadoCasilla
            resultadoPC = resultadoSYE
            
            if(partidoTerminado == 1){
                crearMensajeFinal()
            }else{
                crearMensaje()
            }
        }else{
            crearMensaje()
        }
    } 
}

function serpientesYescaleras(){
    switch(resultadoCasilla){
        case 3://escaleta
            resultadoCasilla = 39 
            resultadoSYE = 'Cara '+ dadoJugador +' .Escalera(3-39) y avanza a la casilla '+resultadoCasilla
        break;

        case 13://serpiente
            resultadoCasilla = 10
            resultadoSYE ='Cara '+ dadoJugador +' .Serpiente(13-10) y regresa a la casilla '+resultadoCasilla
        break;

        case 16://escalera
            resultadoCasilla = 48
            resultadoSYE ='Cara '+ dadoJugador +' .Escalera(16-48) y avanza a la casilla '+resultadoCasilla
        break;

        case 35://escalera
            resultadoCasilla = 44
            resultadoSYE ='Cara '+ dadoJugador +' .Escalera(35-44) y avanza a la casilla '+resultadoCasilla
        break;

        case 38://serpiente
            resultadoCasilla = 5
            resultadoSYE ='Cara '+ dadoJugador +' .Serpiente(38-5) y regresa a la casilla '+resultadoCasilla
        break;

        default:
            if(resultadoCasilla >= 50){
                if(casillasJugador >= 50){
                    resultadoSYE = "Tiro un "+ dadoJugador+" ¡GANASTE!"
                }else{
                    resultadoSYE = "PC tiro un "+ dadoJugador+" ¡PERDISTE!"
                }
                partidoTerminado = 1
            }else{
                resultadoSYE = 'Cara '+ dadoJugador + '.Avanza a la casilla '+resultadoCasilla
            }
        break;    
    }
} 

function crearMensaje(){
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu: '+ resultadoJugador+' PC: '+resultadoPC
    sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(){
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoSYE

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