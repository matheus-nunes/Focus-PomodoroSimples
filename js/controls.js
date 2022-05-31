export default function Controls({ play, pause, stop, set }) {
  function player() {
    //a baixo estamos pegando a lista de classe e adicionando e removendo classes
    play.classList.add('hide')
    pause.classList.remove('hide')
    stop.classList.remove('hide')
    set.classList.add('hide')
  }

  function pauser() {
    //a baixo estamos pegando a lista de classe e adicionando e removendo classes
    pause.classList.add('hide')
    play.classList.remove('hide')
  }

  function resetarControles() {
    pause.classList.add('hide')
    play.classList.remove('hide')
    set.classList.remove('hide')
    stop.classList.add('hide')
  }

  return {
    resetarControles,
    player,
    pauser
  }
}
