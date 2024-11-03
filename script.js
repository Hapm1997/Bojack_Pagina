document.getElementById("cerrar").onclick = function () { cerrar() };
function cerrar() {
    document.getElementById("menuPrinc").style.display = "none";
    document.getElementById("abrir").style.display = "block";
    document.getElementById("cerrar").style.display = "none";
}
document.getElementById("abrir").onclick = function () { abrir() };
function abrir() {
    document.getElementById("menuPrinc").style.display = "flex";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "block";
}