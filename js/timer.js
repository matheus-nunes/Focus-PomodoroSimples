import Audios from './audios.js'
const audios = Audios({})

export default function Timer({
  minutoSpan,
  secondSpan,
  timerOut,
  resetarControle,
  seconds,
  minutes,
  finalTempos
}) {
  function atualizarDisplay(minutes, seconds) {
    //a função pad.Start serve pra preencher. primerio seta quantos caracteres deve ser e segundo o que vai preencher
    minutoSpan.textContent = String(minutes).padStart(2, '0')
    secondSpan.textContent = String(seconds).padStart(2, '0')
  }

  function resetTimer() {
    clearTimeout(timerOut)
  }

  function countdow() {
    timerOut = setTimeout(function () {
      seconds = Number(secondSpan.textContent)
      minutes = Number(minutoSpan.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      atualizarDisplay(minutes, 0)
      /*a baixo estamos fazendo uma validação pra quando for menor que 0 segundos os segundos recebem 60*/

      if (isFinished) {
        resetarControle()
        audios.finalTempo()
        audios.pararMusiquinha()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      atualizarDisplay(minutes, String(seconds - 1))
      /*a baixo estamos utilizando recursividade: que nada mais é do que chamar a função novamente
    a cada 1000 milesegundos
    */
      countdow()
      /*a baixo estamos fazendo uma função pra decrementar a cada 1000 milesegundos*/
    }, 1000)
  }
  return { countdow, resetTimer, atualizarDisplay, setTimeout }
}
