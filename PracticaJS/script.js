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
  console.log(numero);
  console.log(letra);
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

document.getElementById('oracion').onkeypress= function(e){
  if(e.keyCode==13){
    document.getElementById('pal').click();
  }
}

function palindromo(pal){
  var oracion = document.querySelector('#oracion').value;
  oracion = oracion.toLowerCase();
  resp = "No es palindromo";
  i = 0, j = oracion.length-1;
  while(j > i){
    while(oracion[i] == " ")
      i++;
    while(oracion[j] == " ")
      j--;
    if(oracion[i] == oracion[j]){
      i++;
      j--;
    } else
      i = j + 1;
  }
  if(i == j)
    resp = "Es palindromo";
  alert(resp);
}
