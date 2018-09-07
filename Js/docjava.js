$(function(){

    var texto = "Hoja de Vida";
    maquina("typer",texto,200);

});

function maquina(contenedor,texto,intervalo){
  
   longitud = texto.length;
  
   tagHtml = document.getElementById(contenedor);
   tagHtml.innerHTML="";
   var i=0;
   
   timer = setInterval(function(){
      
      tagHtml.innerHTML = tagHtml.innerHTML.substr(0,tagHtml.innerHTML.length-1) + texto.charAt(i) + "_";
      
      if(i >= longitud){
         
         clearInterval(timer);
         tagHtml.innerHTML = tagHtml.innerHTML.substr(0,longitud);
         setTimeOut(function(){
            maquina("typer",texto,100);
            return true;
         }, 5000);
      } else {
      
         i++;
      }
   },intervalo);
};