import Controls from './controls.js'
import Timer from './timer.js'
import Audios from './audios.js'

// TRABALHANDO COM A DOM

/*a pra nós utilizarmos a DOM 
basta colocar document.querySelector
 isso permite que pegamos alguma propriedade do html
 */

/*a baixo estamos atribuindo o a classe play e pause a uma variavel*/
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let set = document.querySelector('.set')
let stop = document.querySelector('.stop')

let som = document.querySelector('.som')
let mute = document.querySelector('.mute')

let minutoSpan = document.querySelector('.minutos')
let secondSpan = document.querySelector('.segundos')

const minutoInicio = document.querySelector('.minutos').textContent
console.log(minutoInicio)
let minutes = Number(minutoSpan.textContent)
let seconds
let timerOut

const controls = Controls({
  play,
  pause,
  set,
  stop
})

const timer = Timer({
  minutoSpan,
  secondSpan,
  timerOut,
  minutoInicio,
  seconds,
  minutes,
  resetarControle: controls.resetarControles
})

const audios = Audios({})

play.addEventListener('click', function () {
  controls.player()
  timer.countdow()
  audios.pressAudio()
})

pause.addEventListener('click', function () {
  controls.pauser()
  timer.resetTimer()
})

stop.addEventListener('click', function () {
  controls.resetarControles()
  timer.atualizarDisplay(minutoInicio, 0)
  timer.resetTimer()
})

som.addEventListener('click', function () {
  audios.pararMusiquinha()
  som.classList.add('hide')
  mute.classList.remove('hide')
})

mute.addEventListener('click', function () {
  audios.tocarMusiquinha()
  mute.classList.add('hide')
  som.classList.remove('hide')
})

/*FUNÇÃO PARA ALTERAR OS SEGUNDOS E MINUTOS*/
set.addEventListener('click', function () {
  minutes = prompt('Quantos Minutos ? ') || 0

  timer.atualizarDisplay(minutes, 0)
})
