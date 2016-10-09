document.getElementById('barraBusq').onkeypress= function(e){
  if(e.keyCode==13){
    document.getElementById('searchG').click();
  }
}

function busqueda(){
  var b = document.getElementById("barraBusq").value;
  if(b != ''){
    open("https://www.google.com.mx/#q=" + b);
  }else{
    alert("Ingresa tu búsqueda");
  }
}
