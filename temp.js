let f = 1;
document.getElementById("txtDianeUno").style.display = "none";
document.getElementById("txtDianeDos").style.display = "none";
document.getElementById("txtDianeTres").style.display = "none";
document.getElementById("txtDianeCuatro").style.display = "none";
document.getElementById("txtDianeCinco").style.display = "none";
document.getElementById("txtDianeSeis").style.display = "none";
document.getElementById("diane01").onclick = function () { verDianeUno() };
function verDianeUno() {
    if (f == 1) {
        document.getElementById("txtDianeUno").style.display = "flex";
        document.getElementById("txtDianeDos").style.display = "none";
        document.getElementById("txtDianeTres").style.display = "none";
        document.getElementById("txtDianeCuatro").style.display = "none";
        document.getElementById("txtDianeCinco").style.display = "none";
        document.getElementById("txtDianeSeis").style.display = "none";
        const aElem = document.getElementById("diane01");
        aElem.href = "#diane06";
        f = 0;
    } else {
        if (f == 0) {
            document.getElementById("txtDianeUno").style.display = "none";
            document.getElementById("txtDianeDos").style.display = "none";
            document.getElementById("txtDianeTres").style.display = "none";
            document.getElementById("txtDianeCuatro").style.display = "none";
            document.getElementById("txtDianeCinco").style.display = "none";
            document.getElementById("txtDianeSeis").style.display = "none";
            f = 1;
        }
    }
}
document.getElementById("diane02").onclick = function () { verDianeDos() };
function verDianeDos() {
    if (f == 1) {
        document.getElementById("txtDianeUno").style.display = "none";
        document.getElementById("txtDianeDos").style.display = "flex";
        document.getElementById("txtDianeTres").style.display = "none";
        document.getElementById("txtDianeCuatro").style.display = "none";
        document.getElementById("txtDianeCinco").style.display = "none";
        document.getElementById("txtDianeSeis").style.display = "none";
        const aElem = document.getElementById("diane02");
        aElem.href = "#diane06";
        f = 0;
    } else {
        if (f == 0) {
            document.getElementById("txtDianeUno").style.display = "none";
            document.getElementById("txtDianeDos").style.display = "none";
            document.getElementById("txtDianeTres").style.display = "none";
            document.getElementById("txtDianeCuatro").style.display = "none";
            document.getElementById("txtDianeCinco").style.display = "none";
            document.getElementById("txtDianeSeis").style.display = "none";
            f = 1;
        }
    }
}
document.getElementById("diane03").onclick = function () { verDianeTres() };
function verDianeTres() {
    if (f == 1) {
        document.getElementById("txtDianeUno").style.display = "none";
        document.getElementById("txtDianeDos").style.display = "none";
        document.getElementById("txtDianeTres").style.display = "flex";
        document.getElementById("txtDianeCuatro").style.display = "none";
        document.getElementById("txtDianeCinco").style.display = "none";
        document.getElementById("txtDianeSeis").style.display = "none";
        const aElem = document.getElementById("diane03");
        aElem.href = "#diane06";
        f = 0;
    } else {
        if (f == 0) {
            document.getElementById("txtDianeUno").style.display = "none";
            document.getElementById("txtDianeDos").style.display = "none";
            document.getElementById("txtDianeTres").style.display = "none";
            document.getElementById("txtDianeCuatro").style.display = "none";
            document.getElementById("txtDianeCinco").style.display = "none";
            document.getElementById("txtDianeSeis").style.display = "none";
            f = 1;
        }
    }
}
document.getElementById("diane04").onclick = function () { verDianeCuatro() };
function verDianeCuatro() {
    if (f == 1) {
        document.getElementById("txtDianeUno").style.display = "none";
        document.getElementById("txtDianeDos").style.display = "none";
        document.getElementById("txtDianeTres").style.display = "none";
        document.getElementById("txtDianeCuatro").style.display = "flex";
        document.getElementById("txtDianeCinco").style.display = "none";
        document.getElementById("txtDianeSeis").style.display = "none";
        const aElem = document.getElementById("diane04");
        aElem.href = "#diane06";
        f = 0;
    } else {
        if (f == 0) {
            document.getElementById("txtDianeUno").style.display = "none";
            document.getElementById("txtDianeDos").style.display = "none";
            document.getElementById("txtDianeTres").style.display = "none";
            document.getElementById("txtDianeCuatro").style.display = "none";
            document.getElementById("txtDianeCinco").style.display = "none";
            document.getElementById("txtDianeSeis").style.display = "none";
            f = 1;
        }
    }
}
document.getElementById("diane05").onclick = function () { verDianeCinco() };
function verDianeCinco() {
    if (f == 1) {
        document.getElementById("txtDianeUno").style.display = "none";
        document.getElementById("txtDianeDos").style.display = "none";
        document.getElementById("txtDianeTres").style.display = "none";
        document.getElementById("txtDianeCuatro").style.display = "none";
        document.getElementById("txtDianeCinco").style.display = "flex";
        document.getElementById("txtDianeSeis").style.display = "none";
        f = 0;
    } else {
        if (f == 0) {
            document.getElementById("txtDianeUno").style.display = "none";
            document.getElementById("txtDianeDos").style.display = "none";
            document.getElementById("txtDianeTres").style.display = "none";
            document.getElementById("txtDianeCuatro").style.display = "none";
            document.getElementById("txtDianeCinco").style.display = "none";
            document.getElementById("txtDianeSeis").style.display = "none";
            const aElem = document.getElementById("diane05");
            aElem.href = "#diane06";    
            f = 1;
        }
    }
}
document.getElementById("diane06").onclick = function () { verDianeSeis() };
function verDianeSeis() {
    if (f == 1) {
        document.getElementById("txtDianeUno").style.display = "none";
        document.getElementById("txtDianeDos").style.display = "none";
        document.getElementById("txtDianeTres").style.display = "none";
        document.getElementById("txtDianeCuatro").style.display = "none";
        document.getElementById("txtDianeCinco").style.display = "none";
        document.getElementById("txtDianeSeis").style.display = "flex";
        const aElem = document.getElementById("diane06");
        aElem.href = "#diane06";
        f = 0;
    } else {
        if (f == 0) {
            document.getElementById("txtDianeUno").style.display = "none";
            document.getElementById("txtDianeDos").style.display = "none";
            document.getElementById("txtDianeTres").style.display = "none";
            document.getElementById("txtDianeCuatro").style.display = "none";
            document.getElementById("txtDianeCinco").style.display = "none";
            document.getElementById("txtDianeSeis").style.display = "none";
            f = 1;
        }
    }
}

/*-----------------------------------------------------------------*/
let a = 1;
document.getElementById("txtBojackUno").style.display = "none";
document.getElementById("txtBojackDos").style.display = "none";
document.getElementById("txtBojackTres").style.display = "none";
document.getElementById("txtBojackCuatro").style.display = "none";
document.getElementById("txtBojackCinco").style.display = "none";
document.getElementById("txtBojackSeis").style.display = "none";
document.getElementById("bojack01").onclick = function () { verBojackUno() };
function verBojackUno() {
    if (a == 1) {
        document.getElementById("txtBojackUno").style.display = "flex";
        document.getElementById("txtBojackDos").style.display = "none";
        document.getElementById("txtBojackTres").style.display = "none";
        document.getElementById("txtBojackCuatro").style.display = "none";
        document.getElementById("txtBojackCinco").style.display = "none";
        document.getElementById("txtBojackSeis").style.display = "none";
        const aElem = document.getElementById("bojack01");
        aElem.href = "#bojack06";
        a = 0;

    } else {
        if (a == 0) {
            document.getElementById("txtBojackUno").style.display = "none";
            document.getElementById("txtBojackDos").style.display = "none";
            document.getElementById("txtBojackTres").style.display = "none";
            document.getElementById("txtBojackCuatro").style.display = "none";
            document.getElementById("txtBojackCinco").style.display = "none";
            document.getElementById("txtBojackSeis").style.display = "none";
            a = 1;
        }
    }
}

document.getElementById("bojack02").onclick = function () { verBojackDos() };
function verBojackDos() {
    if (a == 1) {
        document.getElementById("txtBojackUno").style.display = "none";
        document.getElementById("txtBojackDos").style.display = "flex";
        document.getElementById("txtBojackTres").style.display = "none";
        document.getElementById("txtBojackCuatro").style.display = "none";
        document.getElementById("txtBojackCinco").style.display = "none";
        document.getElementById("txtBojackSeis").style.display = "none";
        const aElem = document.getElementById("bojack02");
        aElem.href = "#bojack06";
        a = 0;
    } else {
        if (a == 0) {
            document.getElementById("txtBojackUno").style.display = "none";
            document.getElementById("txtBojackDos").style.display = "none";
            document.getElementById("txtBojackTres").style.display = "none";
            document.getElementById("txtBojackCuatro").style.display = "none";
            document.getElementById("txtBojackCinco").style.display = "none";
            document.getElementById("txtBojackSeis").style.display = "none";
            a = 1;
        }
    }
}

document.getElementById("bojack03").onclick = function () { verBojackTres() };
function verBojackTres() {
    if (a == 1) {
        document.getElementById("txtBojackUno").style.display = "none";
        document.getElementById("txtBojackDos").style.display = "none";
        document.getElementById("txtBojackTres").style.display = "flex";
        document.getElementById("txtBojackCuatro").style.display = "none";
        document.getElementById("txtBojackCinco").style.display = "none";
        document.getElementById("txtBojackSeis").style.display = "none";
        const aElem = document.getElementById("bojack03");
        aElem.href = "#bojack06";
        a = 0;
    } else {
        if (a == 0) {
            document.getElementById("txtBojackUno").style.display = "none";
            document.getElementById("txtBojackDos").style.display = "none";
            document.getElementById("txtBojackTres").style.display = "none";
            document.getElementById("txtBojackCuatro").style.display = "none";
            document.getElementById("txtBojackCinco").style.display = "none";
            document.getElementById("txtBojackSeis").style.display = "none";
            a = 1;
        }
    }
}

document.getElementById("bojack04").onclick = function () { verBojackCuatro() };
function verBojackCuatro() {
    if (a == 1) {
        document.getElementById("txtBojackUno").style.display = "none";
        document.getElementById("txtBojackDos").style.display = "none";
        document.getElementById("txtBojackTres").style.display = "none";
        document.getElementById("txtBojackCuatro").style.display = "flex";
        document.getElementById("txtBojackCinco").style.display = "none";
        document.getElementById("txtBojackSeis").style.display = "none";
        const aElem = document.getElementById("bojack04");
        aElem.href = "#bojack06";
        a = 0;
    } else {
        if (a == 0) {
            document.getElementById("txtBojackUno").style.display = "none";
            document.getElementById("txtBojackDos").style.display = "none";
            document.getElementById("txtBojackTres").style.display = "none";
            document.getElementById("txtBojackCuatro").style.display = "none";
            document.getElementById("txtBojackCinco").style.display = "none";
            document.getElementById("txtBojackSeis").style.display = "none";
            a = 1;
        }
    }
}
document.getElementById("bojack05").onclick = function () { verBojackCinco() };
function verBojackCinco() {
    if (a == 1) {
        document.getElementById("txtBojackUno").style.display = "none";
        document.getElementById("txtBojackDos").style.display = "none";
        document.getElementById("txtBojackTres").style.display = "none";
        document.getElementById("txtBojackCuatro").style.display = "none";
        document.getElementById("txtBojackCinco").style.display = "flex";
        document.getElementById("txtBojackSeis").style.display = "none";
        const aElem = document.getElementById("bojack05");
        aElem.href = "#bojack06";
        a = 0;
    } else {
        if (a == 0) {
            document.getElementById("txtBojackUno").style.display = "none";
            document.getElementById("txtBojackDos").style.display = "none";
            document.getElementById("txtBojackTres").style.display = "none";
            document.getElementById("txtBojackCuatro").style.display = "none";
            document.getElementById("txtBojackCinco").style.display = "none";
            document.getElementById("txtBojackSeis").style.display = "none";
            a = 1;
        }
    }
}
document.getElementById("bojack06").onclick = function () { verBojackSeis() };
function verBojackSeis() {
    if (a == 1) {
        document.getElementById("txtBojackUno").style.display = "none";
        document.getElementById("txtBojackDos").style.display = "none";
        document.getElementById("txtBojackTres").style.display = "none";
        document.getElementById("txtBojackCuatro").style.display = "none";
        document.getElementById("txtBojackCinco").style.display = "none";
        document.getElementById("txtBojackSeis").style.display = "flex";
        const aElem = document.getElementById("bojack06");
        aElem.href = "#bojack06";
        a = 0;
    } else {
        if (a == 0) {
            document.getElementById("txtBojackUno").style.display = "none";
            document.getElementById("txtBojackDos").style.display = "none";
            document.getElementById("txtBojackTres").style.display = "none";
            document.getElementById("txtBojackCuatro").style.display = "none";
            document.getElementById("txtBojackCinco").style.display = "none";
            document.getElementById("txtBojackSeis").style.display = "none";
            a = 1;
        }
    }
}
/*----------------------------------------------------------------*/
let b = 1;
document.getElementById("txtToddUno").style.display = "none";
document.getElementById("txtToddDos").style.display = "none";
document.getElementById("txtToddTres").style.display = "none";
document.getElementById("txtToddCuatro").style.display = "none";
document.getElementById("txtToddCinco").style.display = "none";
document.getElementById("txtToddSeis").style.display = "none";
document.getElementById("todd01").onclick = function () { verToddUno() };
function verToddUno() {
    if (b == 1) {
        document.getElementById("txtToddUno").style.display = "flex";
        document.getElementById("txtToddDos").style.display = "none";
        document.getElementById("txtToddTres").style.display = "none";
        document.getElementById("txtToddCuatro").style.display = "none";
        document.getElementById("txtToddCinco").style.display = "none";
        document.getElementById("txtToddSeis").style.display = "none";
        const aElem = document.getElementById("todd01");
        aElem.href = "#todd06";
        b = 0;
    } else {
        if (b == 0) {
            document.getElementById("txtToddUno").style.display = "none";
            document.getElementById("txtToddDos").style.display = "none";
            document.getElementById("txtToddTres").style.display = "none";
            document.getElementById("txtToddCuatro").style.display = "none";
            document.getElementById("txtToddCinco").style.display = "none";
            document.getElementById("txtToddSeis").style.display = "none";
            b = 1;
        }
    }
}

document.getElementById("todd02").onclick = function () { verToddDos() };
function verToddDos() {
    if (b == 1) {
        document.getElementById("txtToddUno").style.display = "none";
        document.getElementById("txtToddDos").style.display = "flex";
        document.getElementById("txtToddTres").style.display = "none";
        document.getElementById("txtToddCuatro").style.display = "none";
        document.getElementById("txtToddCinco").style.display = "none";
        document.getElementById("txtToddSeis").style.display = "none";
        const aElem = document.getElementById("todd02");
        aElem.href = "#todd06";
        b = 0;
    } else {
        if (b == 0) {
            document.getElementById("txtToddUno").style.display = "none";
            document.getElementById("txtToddDos").style.display = "none";
            document.getElementById("txtToddTres").style.display = "none";
            document.getElementById("txtToddCuatro").style.display = "none";
            document.getElementById("txtToddCinco").style.display = "none";
            document.getElementById("txtToddSeis").style.display = "none";
            b = 1;
        }
    }
}

document.getElementById("todd03").onclick = function () { verToddTres() };
function verToddTres() {
    if (b == 1) {
        document.getElementById("txtToddUno").style.display = "none";
        document.getElementById("txtToddDos").style.display = "none";
        document.getElementById("txtToddTres").style.display = "flex";
        document.getElementById("txtToddCuatro").style.display = "none";
        document.getElementById("txtToddCinco").style.display = "none";
        document.getElementById("txtToddSeis").style.display = "none";
        const aElem = document.getElementById("todd03");
        aElem.href = "#todd06";
        b = 0;
    } else {
        if (b == 0) {
            document.getElementById("txtToddUno").style.display = "none";
            document.getElementById("txtToddDos").style.display = "none";
            document.getElementById("txtToddTres").style.display = "none";
            document.getElementById("txtToddCuatro").style.display = "none";
            document.getElementById("txtToddCinco").style.display = "none";
            document.getElementById("txtToddSeis").style.display = "none";
            b = 1;
        }
    }
}

document.getElementById("todd04").onclick = function () { verToddCuatro() };
function verToddCuatro() {
    if (b == 1) {
        document.getElementById("txtToddUno").style.display = "none";
        document.getElementById("txtToddDos").style.display = "none";
        document.getElementById("txtToddTres").style.display = "none";
        document.getElementById("txtToddCuatro").style.display = "flex";
        document.getElementById("txtToddCinco").style.display = "none";
        document.getElementById("txtToddSeis").style.display = "none";
        const aElem = document.getElementById("todd04");
        aElem.href = "#todd06";
        b = 0;
    } else {
        if (b == 0) {
            document.getElementById("txtToddUno").style.display = "none";
            document.getElementById("txtToddDos").style.display = "none";
            document.getElementById("txtToddTres").style.display = "none";
            document.getElementById("txtToddCuatro").style.display = "none";
            document.getElementById("txtToddCinco").style.display = "none";
            document.getElementById("txtToddSeis").style.display = "none";
            b = 1;
        }
    }
}
document.getElementById("todd05").onclick = function () { verToddCinco() };
function verToddCinco() {
    if (b == 1) {
        document.getElementById("txtToddUno").style.display = "none";
        document.getElementById("txtToddDos").style.display = "none";
        document.getElementById("txtToddTres").style.display = "none";
        document.getElementById("txtToddCuatro").style.display = "none";
        document.getElementById("txtToddCinco").style.display = "flex";
        document.getElementById("txtToddSeis").style.display = "none";
        const aElem = document.getElementById("todd05");
        aElem.href = "#todd06";
        b = 0;
    } else {
        if (b == 0) {
            document.getElementById("txtToddUno").style.display = "none";
            document.getElementById("txtToddDos").style.display = "none";
            document.getElementById("txtToddTres").style.display = "none";
            document.getElementById("txtToddCuatro").style.display = "none";
            document.getElementById("txtToddCinco").style.display = "none";
            document.getElementById("txtToddSeis").style.display = "none";
            b = 1;
        }
    }
}
document.getElementById("todd06").onclick = function () { verToddSeis() };
function verToddSeis() {
    if (b == 1) {
        document.getElementById("txtToddUno").style.display = "none";
        document.getElementById("txtToddDos").style.display = "none";
        document.getElementById("txtToddTres").style.display = "none";
        document.getElementById("txtToddCuatro").style.display = "none";
        document.getElementById("txtToddCinco").style.display = "none";
        document.getElementById("txtToddSeis").style.display = "flex";
        const aElem = document.getElementById("todd06");
        aElem.href = "#todd06";
        b = 0;
    } else {
        if (b == 0) {
            document.getElementById("txtToddUno").style.display = "none";
            document.getElementById("txtToddDos").style.display = "none";
            document.getElementById("txtToddTres").style.display = "none";
            document.getElementById("txtToddCuatro").style.display = "none";
            document.getElementById("txtToddCinco").style.display = "none";
            document.getElementById("txtToddSeis").style.display = "none";
            b = 1;
        }
    }
}
/*----------------------------------------------------------*/
let c = 1;
document.getElementById("txtMrUno").style.display = "none";
document.getElementById("txtMrDos").style.display = "none";
document.getElementById("txtMrTres").style.display = "none";
document.getElementById("txtMrCuatro").style.display = "none";
document.getElementById("txtMrCinco").style.display = "none";
document.getElementById("txtMrSeis").style.display = "none";
document.getElementById("mr01").onclick = function () { verMrUno() };
function verMrUno() {
    if (c == 1) {
        document.getElementById("txtMrUno").style.display = "flex";
        document.getElementById("txtMrDos").style.display = "none";
        document.getElementById("txtMrTres").style.display = "none";
        document.getElementById("txtMrCuatro").style.display = "none";
        document.getElementById("txtMrCinco").style.display = "none";
        document.getElementById("txtMrSeis").style.display = "none";
        const aElem = document.getElementById("mr01");
        aElem.href = "#mr06";
        c = 0;
    } else {
        if (c == 0) {
            document.getElementById("txtMrUno").style.display = "none";
            document.getElementById("txtMrDos").style.display = "none";
            document.getElementById("txtMrTres").style.display = "none";
            document.getElementById("txtMrCuatro").style.display = "none";
            document.getElementById("txtMrCinco").style.display = "none";
            document.getElementById("txtMrSeis").style.display = "none";
            c = 1;
        }
    }
}

document.getElementById("mr02").onclick = function () { verMrDos() };
function verMrDos() {
    if (c == 1) {
        document.getElementById("txtMrUno").style.display = "none";
        document.getElementById("txtMrDos").style.display = "flex";
        document.getElementById("txtMrTres").style.display = "none";
        document.getElementById("txtMrCuatro").style.display = "none";
        document.getElementById("txtMrCinco").style.display = "none";
        document.getElementById("txtMrSeis").style.display = "none";
        const aElem = document.getElementById("mr02");
        aElem.href = "#mr06";
        c = 0;
    } else {
        if (c == 0) {
            document.getElementById("txtMrUno").style.display = "none";
            document.getElementById("txtMrDos").style.display = "none";
            document.getElementById("txtMrTres").style.display = "none";
            document.getElementById("txtMrCuatro").style.display = "none";
            document.getElementById("txtMrCinco").style.display = "none";
            document.getElementById("txtMrSeis").style.display = "none";
            c = 1;
        }
    }
}

document.getElementById("mr03").onclick = function () { verMrTres() };
function verMrTres() {
    if (c == 1) {
        document.getElementById("txtMrUno").style.display = "none";
        document.getElementById("txtMrDos").style.display = "none";
        document.getElementById("txtMrTres").style.display = "flex";
        document.getElementById("txtMrCuatro").style.display = "none";
        document.getElementById("txtMrCinco").style.display = "none";
        document.getElementById("txtMrSeis").style.display = "none";
        const aElem = document.getElementById("mr03");
        aElem.href = "#mr06";
        c = 0;
    } else {
        if (c == 0) {
            document.getElementById("txtMrUno").style.display = "none";
            document.getElementById("txtMrDos").style.display = "none";
            document.getElementById("txtMrTres").style.display = "none";
            document.getElementById("txtMrCuatro").style.display = "none";
            document.getElementById("txtMrCinco").style.display = "none";
            document.getElementById("txtMrSeis").style.display = "none";
            c = 1;
        }
    }
}

document.getElementById("mr04").onclick = function () { verMrCuatro() };
function verMrCuatro() {
    if (c == 1) {
        document.getElementById("txtMrUno").style.display = "none";
        document.getElementById("txtMrDos").style.display = "none";
        document.getElementById("txtMrTres").style.display = "none";
        document.getElementById("txtMrCuatro").style.display = "flex";
        document.getElementById("txtMrCinco").style.display = "none";
        document.getElementById("txtMrSeis").style.display = "none";
        const aElem = document.getElementById("mr04");
        aElem.href = "#mr06";
        c = 0;
    } else {
        if (c == 0) {
            document.getElementById("txtMrUno").style.display = "none";
            document.getElementById("txtMrDos").style.display = "none";
            document.getElementById("txtMrTres").style.display = "none";
            document.getElementById("txtMrCuatro").style.display = "none";
            document.getElementById("txtMrCinco").style.display = "none";
            document.getElementById("txtMrSeis").style.display = "none";
            c = 1;
        }
    }
}
document.getElementById("mr05").onclick = function () { verMrCinco() };
function verMrCinco() {
    if (c == 1) {
        document.getElementById("txtMrUno").style.display = "none";
        document.getElementById("txtMrDos").style.display = "none";
        document.getElementById("txtMrTres").style.display = "none";
        document.getElementById("txtMrCuatro").style.display = "none";
        document.getElementById("txtMrCinco").style.display = "flex";
        document.getElementById("txtMrSeis").style.display = "none";
        const aElem = document.getElementById("mr05");
        aElem.href = "#mr06";
        c = 0;
    } else {
        if (c == 0) {
            document.getElementById("txtMrUno").style.display = "none";
            document.getElementById("txtMrDos").style.display = "none";
            document.getElementById("txtMrTres").style.display = "none";
            document.getElementById("txtMrCuatro").style.display = "none";
            document.getElementById("txtMrCinco").style.display = "none";
            document.getElementById("txtMrSeis").style.display = "none";
            c = 1;
        }
    }
}
document.getElementById("mr06").onclick = function () { verMrSeis() };
function verMrSeis() {
    if (c == 1) {
        document.getElementById("txtMrUno").style.display = "none";
        document.getElementById("txtMrDos").style.display = "none";
        document.getElementById("txtMrTres").style.display = "none";
        document.getElementById("txtMrCuatro").style.display = "none";
        document.getElementById("txtMrCinco").style.display = "none";
        document.getElementById("txtMrSeis").style.display = "flex";
        const aElem = document.getElementById("mr06");
        aElem.href = "#mr06";
        c = 0;
    } else {
        if (c == 0) {
            document.getElementById("txtMrUno").style.display = "none";
            document.getElementById("txtMrDos").style.display = "none";
            document.getElementById("txtMrTres").style.display = "none";
            document.getElementById("txtMrCuatro").style.display = "none";
            document.getElementById("txtMrCinco").style.display = "none";
            document.getElementById("txtMrSeis").style.display = "none";
            c = 1;
        }
    }
}
/*------------------------------------------------------------*/
let d = 1;
document.getElementById("txtPcUno").style.display = "none";
document.getElementById("txtPcDos").style.display = "none";
document.getElementById("txtPcTres").style.display = "none";
document.getElementById("txtPcCuatro").style.display = "none";
document.getElementById("txtPcCinco").style.display = "none";
document.getElementById("txtPcSeis").style.display = "none";


document.getElementById("princess01").onclick = function () { verPcUno() };
function verPcUno() {
    if (d == 1) {
        document.getElementById("txtPcUno").style.display = "flex";
        document.getElementById("txtPcDos").style.display = "none";
        document.getElementById("txtPcTres").style.display = "none";
        document.getElementById("txtPcCuatro").style.display = "none";
        document.getElementById("txtPcCinco").style.display = "none";
        document.getElementById("txtPcSeis").style.display = "none";
        const aElem = document.getElementById("princess01");
        aElem.href = "#princess06";
        d = 0;
    } else {
        if (d == 0) {
            document.getElementById("txtPcUno").style.display = "none";
            document.getElementById("txtPcDos").style.display = "none";
            document.getElementById("txtPcTres").style.display = "none";
            document.getElementById("txtPcCuatro").style.display = "none";
            document.getElementById("txtPcCinco").style.display = "none";
            document.getElementById("txtPcSeis").style.display = "none";
            d = 1;
        }
    }
}

document.getElementById("princess02").onclick = function () { verPcDos() };
function verPcDos() {
    if (d == 1) {
        document.getElementById("txtPcUno").style.display = "none";
        document.getElementById("txtPcDos").style.display = "flex";
        document.getElementById("txtPcTres").style.display = "none";
        document.getElementById("txtPcCuatro").style.display = "none";
        document.getElementById("txtPcCinco").style.display = "none";
        document.getElementById("txtPcSeis").style.display = "none";
        const aElem = document.getElementById("princess02");
        aElem.href = "#princess06";
        d = 0;
    } else {
        if (d == 0) {
            document.getElementById("txtPcUno").style.display = "none";
            document.getElementById("txtPcDos").style.display = "none";
            document.getElementById("txtPcTres").style.display = "none";
            document.getElementById("txtPcCuatro").style.display = "none";
            document.getElementById("txtPcCinco").style.display = "none";
            document.getElementById("txtPcSeis").style.display = "none";
            d = 1;
        }
    }
}

document.getElementById("princess03").onclick = function () { verPcTres() };
function verPcTres() {
    if (d == 1) {
        document.getElementById("txtPcUno").style.display = "none";
        document.getElementById("txtPcDos").style.display = "none";
        document.getElementById("txtPcTres").style.display = "flex";
        document.getElementById("txtPcCuatro").style.display = "none";
        document.getElementById("txtPcCinco").style.display = "none";
        document.getElementById("txtPcSeis").style.display = "none";
        const aElem = document.getElementById("princess03");
        aElem.href = "#princess06";
        d = 0;
    } else {
        if (d == 0) {
            document.getElementById("txtPcUno").style.display = "none";
            document.getElementById("txtPcDos").style.display = "none";
            document.getElementById("txtPcTres").style.display = "none";
            document.getElementById("txtPcCuatro").style.display = "none";
            document.getElementById("txtPcCinco").style.display = "none";
            document.getElementById("txtPcSeis").style.display = "none";
            d = 1;
        }
    }
}

document.getElementById("princess04").onclick = function () { verPcCuatro() };
function verPcCuatro() {
    if (d == 1) {
        document.getElementById("txtPcUno").style.display = "none";
        document.getElementById("txtPcDos").style.display = "none";
        document.getElementById("txtPcTres").style.display = "none";
        document.getElementById("txtPcCuatro").style.display = "flex";
        document.getElementById("txtPcCinco").style.display = "none";
        document.getElementById("txtPcSeis").style.display = "none";
        const aElem = document.getElementById("princess04");
        aElem.href = "#princess06";
        d = 0;
    } else {
        if (d == 0) {
            document.getElementById("txtPcUno").style.display = "none";
            document.getElementById("txtPcDos").style.display = "none";
            document.getElementById("txtPcTres").style.display = "none";
            document.getElementById("txtPcCuatro").style.display = "none";
            document.getElementById("txtPcCinco").style.display = "none";
            document.getElementById("txtPcSeis").style.display = "none";
            d = 1;
        }
    }
}
document.getElementById("princess05").onclick = function () { verPcCinco() };
function verPcCinco() {
    if (d == 1) {
        document.getElementById("txtPcUno").style.display = "none";
        document.getElementById("txtPcDos").style.display = "none";
        document.getElementById("txtPcTres").style.display = "none";
        document.getElementById("txtPcCuatro").style.display = "none";
        document.getElementById("txtPcCinco").style.display = "flex";
        document.getElementById("txtPcSeis").style.display = "none";
        const aElem = document.getElementById("princess05");
        aElem.href = "#princess06";
        d = 0;
    } else {
        if (d == 0) {
            document.getElementById("txtPcUno").style.display = "none";
            document.getElementById("txtPcDos").style.display = "none";
            document.getElementById("txtPcTres").style.display = "none";
            document.getElementById("txtPcCuatro").style.display = "none";
            document.getElementById("txtPcCinco").style.display = "none";
            document.getElementById("txtPcSeis").style.display = "none";
            d = 1;
        }
    }
}
document.getElementById("princess06").onclick = function () { verPcSeis() };
function verPcSeis() {
    if (d == 1) {
        document.getElementById("txtPcUno").style.display = "none";
        document.getElementById("txtPcDos").style.display = "none";
        document.getElementById("txtPcTres").style.display = "none";
        document.getElementById("txtPcCuatro").style.display = "none";
        document.getElementById("txtPcCinco").style.display = "none";
        document.getElementById("txtPcSeis").style.display = "flex";
        const aElem = document.getElementById("princess06");
        aElem.href = "#princess06";
        d = 0;
    } else {
        if (d == 0) {
            document.getElementById("txtPcUno").style.display = "none";
            document.getElementById("txtPcDos").style.display = "none";
            document.getElementById("txtPcTres").style.display = "none";
            document.getElementById("txtPcCuatro").style.display = "none";
            document.getElementById("txtPcCinco").style.display = "none";
            document.getElementById("txtPcSeis").style.display = "none";
            d = 1;
        }
    }
}