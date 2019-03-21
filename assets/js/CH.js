let ATK_CH = document.getElementById("ATK_CH");
let ac = 1;
ATK_CH.innerHTML = ac;


let DEF_CH = document.getElementById("DEF_CH");
let dc = 1;
DEF_CH.innerHTML = dc;

let ARME_CH = document.getElementById("ARME_CH");
let wc = false;
ARME_CH.innerHTML = "Épée";

let V_NBR = document.getElementById("V_nbr");
let victories = 0;

let Give_ATK_CH = document.getElementById("Give_ATK_CH");
let Give_DEF_CH = document.getElementById("Give_DEF_CH");
let Give_ARME_CH = document.getElementById("Give_ARME_CH");

Give_ATK_CH.addEventListener('click', Attaque_plus);
Give_DEF_CH.addEventListener('click', Defense_plus);
Give_ARME_CH.addEventListener('click', Change_arme);

function Attaque_plus() {
    if (wc === false) {
        ac += 10 * 2;
    } else {
        ac += 10;
    }
    ATK_CH.innerHTML = ac;
}

function Defense_plus() {
    if (wc === true) {
        dc += 10 * 2;
    } else {
        dc += 10;
    }
    DEF_CH.innerHTML = dc;
}

function Change_arme() {
    if (wc === false) {
        wc === true;
        ARME_CH.innerHTML = "Épée";
    } else {
        wc = false;
        ARME_CH.innerHTML = "Hache";
    }
}