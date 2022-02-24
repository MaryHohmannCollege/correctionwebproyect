let foto = 1;
muestraFoto(foto);

function avanzaFoto(n){
  muestraFoto((foto += n));
}
function positionFoto(n){
  muestraFoto((foto = n));
}

function muestraFoto(n){
  let i;
  let slides;
  let barras;
  slides = document.getElementById("contenedorBanner").getElementsByClassName("noticia");
  barras = document.getElementById("barrasBanner").getElementsByClassName("barraBanner");

  if (n > slides.length){
    foto = 1;
  }if(n < 1){
    foto = slides.length;
  }for(i = 0; i < slides.length; i++){
    slides[i].getElementsByClassName.display= "none";
  }for(i = 0; i < slides.length; i++){
    barras[i].className = barras[i].className.replace("activate-d", "");
  }
  slides[foto - 1].style.display = "block";
  barras[foto - 1].className += " activate-d";

}