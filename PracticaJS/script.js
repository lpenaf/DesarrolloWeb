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

function palindromo(pal){
  var oracion = document.querySelector('#oracion').value;
  resp = "No es palindromo";
  var termine = false;
  while(!termine){
    i = 0;
    j = oracion.length-1;
    if(oracion[i] == " "){
      i++;
    }
    if (oracion[j] == " ") {
      j--;
    }
    if(oracion[j] == oracion[i]){
      if(i == j || j < i){
        resp = "Si es palindromo";
        termine = true;
      }
    }
    else
      termine = true;
    i++;
    j--;
  }
  console.log(resp);
}
