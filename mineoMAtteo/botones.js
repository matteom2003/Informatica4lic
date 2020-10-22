cp1 = document.querySelector("#cp1");
p1 = document.querySelector("#p1");

function cpp() {
  p1.style.backgroundColor = "gray";
}
cp1.onclick = cpp;
ep1 = document.querySelector("#ep1")
function epp(){
    
    var x = document.getElementById("p1")
    x.style.display = "none";
  
}
ep1.onclick = epp
mp1 = document.querySelector("#mp1")
function mpp(){
    var x = document.getElementById("p1")
    x.style.display = "block";
}
mp1.onclick = mpp
imagen = document.querySelector("#imagen")
function cpi() {
    imagen.style.padding = "20px"

}
imagen.onmouseover = cpi