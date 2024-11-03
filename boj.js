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

/*-------------------Contanos------------------*/
let favElem = document.getElementById("fav");
let fondo = document.getElementById("articulo");
favElem.addEventListener("change", () => {
    let indice = document.getElementById("fav").selectedIndex;
    let opt = document.getElementById("fav").options;
    // alert(opt[indice].index);
    if (opt[indice].index == 0) {
        fondo.style.backgroundImage = "url('img/008.jpg')";
    }
    if (opt[indice].index == 1) {
        fondo.style.backgroundImage = "url('img/038.jpg')";
    }
    if (opt[indice].index == 2) {
        fondo.style.backgroundImage = "url('img/049.jpg')";
    }
    if (opt[indice].index == 3) {
        fondo.style.backgroundImage = "url('img/todd_fondo.jpg')";
    }
    if (opt[indice].index == 4) {
        fondo.style.backgroundImage = "url('img/princes.png')";
    }
    if (opt[indice].index == 5) {
        fondo.style.backgroundImage = "url('img/diane_fondo.jpg')";
    }
});