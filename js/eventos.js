console.log(1);

window.addEventListener("load", imprimir); // load espera a que el javascript y los archivos que dependen del HTML estén listos
window.onload = function(){
    console.log(3);
}
document.addEventListener("DOMContentLoaded", function(){ // Solo espera a que se descargue el HTML pero no espera por CSS o imágenes
    console.log(4);
})
console.log(5);
function imprimir(){
    console.log(2);
}

// window.onscroll = function(){
//     console.log("On scrolling");
// }