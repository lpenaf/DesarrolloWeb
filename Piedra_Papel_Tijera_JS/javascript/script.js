
function juego() {
  var jug1 = prompt('Jugador 1: ');
  var jug2 = prompt('Jugador 2: ');
  if(jug1===jug2){
    alert("EMPATE");
  }else if (jug1 === "piedra" && jug2 == "papel") {
    alert('Jugador 2');
  }else if(jug1==="piedra" && jug2==="tijera"){
    alert('Jugador 1');
  }else if(jug1==="papel" && jug2==="tijera"){
    alert('Jugador 1');
  }else if(jug1==="tijera" && jug2==="papel"){
    alert('Jugador 1');
  }else if(jug1==="tijera" && jug1==="piedra"){
    alert('Jugador 2');
  }else {
    alert('error');
  }
}
