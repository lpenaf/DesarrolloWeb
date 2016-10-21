//13/10/2016
function cambiaColor(){
  var numero = prompt('Escribe un número');

  if(numero > 4){
    document.querySelector('p').style.color='blue';
    console.log('es mayor que 4');
  } else {
    document.querySelector('p').style.color='red';
    console.log('es menor que 4');
  }
}

function contador(numero, letra) {
  console.log("Este es el numero que ingresaste: " + numero);
  console.log("Esta es la letra que ingresaste: " + letra);
}

/*Otra forma alterna a onClick de #boton
document.querySelector('#boton').onclick=function(){
  var numero = prompt('Escribe un número');

  if(numero > 4){
    document.querySelector('p').style.color='blue';
    console.log('es mayor que 4');
  } else {
    document.querySelector('p').style.color='red';
    console.log('es menor que 4');
  }
}
*/

document.getElementById('vueltasFib').onkeypress= function(e){
  if(e.keyCode==13){
    document.getElementById('fibon').click();
  }
}

function fibonacci(){
  var vueltas = document.querySelector('#vueltasFib').value;
  prim = 0;
  seg = 1;
  n = 0;
  console.log(prim);
  console.log(seg);
  while(n < vueltas){
    tercero = prim + seg;
    console.log(tercero);
    prim = seg;
    seg = tercero;
    n++;
  }
}

//18/10/2016
document.getElementById('oracion').onkeypress= function(e){
  if(e.keyCode==13){
    document.getElementById('pal').click();
  }
}

function palindromo(){
  var oracion = document.querySelector('#oracion').value;
  oracion = oracion.toLowerCase();
  oracion = oracion.replace(/\s+/g, '');
  resp = "No es palindromo";
  i = 0, j = oracion.length-1;
  while(j > i){
    if(oracion[i] == oracion[j]){
      i++;
      j--;
    } else
        break;
  }
  if(i == j  || i == j+1)
    resp = "Es palindromo";
  console.log("i: " + i);
  console.log("j: " + j);
  alert(resp);
}

//20/10/2016
document.getElementById('numeros').onkeypress= function(f){
  if(f.keyCode==13){
    document.getElementById('cons').click();
  }
}

function repetidos() {
  var texto = document.querySelector('#numeros').value;
  var lista = texto.split(' ');
  var i, j;
  var nueva = [];
  for(i = 0; i < lista.length; i++){
    if(nueva.indexOf(lista[i]) == -1){ //Si el numero no se ha repetido
      console.log("entre3 " + lista[i]);
      for(j = 0; j < lista.length; j++){
        if(j == i) //Para que no se evalúe consigo mismo
          j++;
        if(lista[i] == lista[j]){ //Si encuentra repetido
          nueva.push(lista[i]); //Agrega a la nueva lista
          break;
          }
        }
      }
  }
  if(nueva.length == 0)
    alert("No hay repetidos");
  else
    alert("Numeros repetidos: " + nueva.toString());
}
