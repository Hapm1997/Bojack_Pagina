document.getElementById("bojack_img").style.display = "none";
document.getElementById("diane_img").style.display = "none";
document.getElementById("pc_img").style.display = "none";
document.getElementById("todd_img").style.display = "none";
document.getElementById("mr_img").style.display = "none";
document.getElementById("otro_img").style.display = "none";

document.getElementById("btnBojack").onclick = function () { irBojack() };
function irBojack() {
    document.getElementById("bojack_img").style.display = "block";
    document.getElementById("diane_img").style.display = "none";
    document.getElementById("pc_img").style.display = "none";
    document.getElementById("todd_img").style.display = "none";
    document.getElementById("mr_img").style.display = "none";
    document.getElementById("otro_img").style.display = "none";
    document.getElementById("todos_img").style.display = "none";
}

document.getElementById("btnDiane").onclick = function () { irDiane() };
function irDiane() {
    document.getElementById("bojack_img").style.display = "none";
    document.getElementById("diane_img").style.display = "block";
    document.getElementById("pc_img").style.display = "none";
    document.getElementById("todd_img").style.display = "none";
    document.getElementById("mr_img").style.display = "none";
    document.getElementById("otro_img").style.display = "none";
    document.getElementById("todos_img").style.display = "none";
}

document.getElementById("btnTodd").onclick = function () { irTodd() };
function irTodd() {
    document.getElementById("bojack_img").style.display = "none";
    document.getElementById("diane_img").style.display = "none";
    document.getElementById("pc_img").style.display = "none";
    document.getElementById("todd_img").style.display = "block";
    document.getElementById("mr_img").style.display = "none";
    document.getElementById("otro_img").style.display = "none";
    document.getElementById("todos_img").style.display = "none";
}

document.getElementById("btnMr").onclick = function () { irMr() };
function irMr() {
    document.getElementById("bojack_img").style.display = "none";
    document.getElementById("diane_img").style.display = "none";
    document.getElementById("pc_img").style.display = "none";
    document.getElementById("todd_img").style.display = "none";
    document.getElementById("mr_img").style.display = "block";
    document.getElementById("otro_img").style.display = "none";
    document.getElementById("todos_img").style.display = "none";
}

document.getElementById("btnPc").onclick = function () { irPc() };
function irPc() {
    document.getElementById("bojack_img").style.display = "none";
    document.getElementById("diane_img").style.display = "none";
    document.getElementById("pc_img").style.display = "block";
    document.getElementById("todd_img").style.display = "none";
    document.getElementById("mr_img").style.display = "none";
    document.getElementById("otro_img").style.display = "none";
    document.getElementById("todos_img").style.display = "none";
}

document.getElementById("btnOtro").onclick = function () { irOtro() };
function irOtro() {
    document.getElementById("bojack_img").style.display = "none";
    document.getElementById("diane_img").style.display = "none";
    document.getElementById("pc_img").style.display = "none";
    document.getElementById("todd_img").style.display = "none";
    document.getElementById("mr_img").style.display = "none";
    document.getElementById("otro_img").style.display = "block";
    document.getElementById("todos_img").style.display = "none";
}