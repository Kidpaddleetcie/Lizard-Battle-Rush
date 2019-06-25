/* Les déclarations */

// Les liens avec les éléments HTML
let V_NBR = document.getElementById("V_nbr");
let LZD = document.getElementById("LZD");
let ATK_CH = document.getElementById("ATK_CH");
let DEF_CH = document.getElementById("DEF_CH");
let ARME_CH = document.getElementById("ARME_CH");
let Give_ATK_CH = document.getElementById("Give_ATK_CH");
let Give_DEF_CH = document.getElementById("Give_DEF_CH");
let Give_ARME_CH = document.getElementById("Give_ARME_CH");

let attaque_btn = document.getElementById("ATTAQUE_BTN");
let multi_btn = document.getElementById("MULTI_BTN");

let K_NBR = document.getElementById("K_nbr");
let nom_ennemy = document.getElementById("nom_ennemy");

let ATK_ADV = document.getElementById("ATK_ADV");
let DEF_ADV = document.getElementById("DEF_ADV");
let ARME_ADV = document.getElementById("ARME_ADV");


let player = document.getElementById("Player");
let lezollard_box = document.getElementById("lezollard_box");

let ennemy = document.getElementById("Enemy");
let actions = document.getElementById("Actions");


// Les données de base
let multi = 1;
let multiprix=100;
let lezollard = 20;

let ac = 1;
let dc = 1;

let wc = 1;

let victories = 0;
let kills = 0;
let NE = ["Roger", "Pastis", "Maurice", "Ahmed", "Cassmuray", "Mouloud", "Damien", "Eddy", "Lorenzo", "Jean-Luc", "Abdel", "Kamu", "Cassandro", "Eric"]
    //Les armes de l'adversaire
let Lance = {
    nom: "Lance",
    atk: 5,
}

let Saucisse = {
    nom: "Saucisse",
    atk: 10,
}

let Boudin = {
    nom: "Boudin",
    atk: 20,
}

let Ballon = {
    nom: "Ballon",
    atk: 20 + victories,
}

let Batte2Baseball = {
    nom: "Batte de Baseball",
    atk: 50,
}

let Poing = {
    nom: "Poing",
    atk: 1,
}
let wa = [Lance, Saucisse, Boudin, Ballon, Batte2Baseball, Poing];
let ca = 0;
let ta = 1;
let da = 1
let satan = false;
/* Les fonctions */
function Attaque_plus() {
    if (lezollard >= 5) {
        lezollard -= 5;
        if (wc % 2 === 0) {
            ac += 10 * 2;
        } else {
            ac += 10;
        }
    }
    afficheTOUT()
    gameover()
}

function Defense_plus() {
    if (lezollard >= 5) {
        lezollard -= 5;
        if (wc % 2 != 0) {
            dc += 10 * 2;
        } else {
            dc += 10;
        }
    }
    afficheTOUT()
    gameover()
}

function Change_arme() {
    if (wc % 2 === 0) {
        wc = 3;
        ARME_CH.innerHTML = "Épée";
    } else {
        wc = 2;
        ARME_CH.innerHTML = "Hache";
    }
}

function multi_inc() {
    if (lezollard > multiprix) {
        lezollard -= multiprix;
        multiprix*10;
        ac = ac * 2;
        dc = dc * 2;
        afficheTOUT()
        gameover()
    } else {
        multi_btn.innerHTML = "Re-cliquer quand vous aurez 100 Lézollards ! "
    }
}

function attaque() {
    if (satan === false) {
        if ((ta - dc) <= (ac - da)) {
            ta += (kills * 2) ^ Math.round(Math.PI + wa[ca].atk);
            da += kills + Math.round(ta / 2);
            victories += 1;
            lezollard += 20;
            canvas_ADV.classList.add('hit');
            setTimeout(function() { canvas_ADV.classList.remove('hit'); }, 200);
            afficheTOUT()
            gameover()
        } else {
            afficheTOUT()
            ta += (kills * 2) ^ Math.round(Math.PI + wa[ca].atk);
            da += kills + Math.round(ta / 2);
            kills += 1;
            ca += 1
            canvas_CH.classList.add('hit');
            setTimeout(function() { canvas_CH.classList.remove('hit'); }, 200);
            afficheTOUT();
            gameover()
        }
    } else {
        if ((ta - dc) <= (ac - da)) {
            player.style.display = "none";
            actions.style.display = "none";
            ennemy.style.display = "none";
            body.innerHTML = "<p class=\"satan_vaincu\">Vous avez gagner contre Satan :D </p>"

        } else {
            player.style.display = "none";
            actions.style.display = "none";
            ennemy.style.display = "none";

            body.innerHTML = "<p class=\"satan_gagne\">Vous avez perdu contre Satan...</p>"
        }
    }
}

function afficheTOUT() {
    if (satan === true) {
        ennemy.classList.add("satan");
    } else {
        ATK_CH.innerHTML = ac;
        DEF_CH.innerHTML = dc;
        K_NBR.innerHTML = kills;
        DEF_ADV.innerHTML = da;
        ATK_ADV.innerHTML = ta;
        if (ca > wa.length - 1) {
            ca = 0;
            ARME_ADV.innerHTML = wa[ca].nom;
        } else { ARME_ADV.innerHTML = wa[ca].nom; }


        V_NBR.innerHTML = victories;
        LZD.innerHTML = lezollard + "£";

        if (victories < NE.length) {
            nom_ennemy.innerHTML = NE[victories];
        } else if (victories < NE.length * 2) {
            nom_ennemy.innerHTML = "Jean-" + NE[victories - (NE.length * 1)];

        } else if (victories < NE.length * 3) {
            nom_ennemy.innerHTML = NE[victories - (NE.length * 2)] + " ,Le vrai !";

        } else if (victories < NE.length * 4) {
            nom_ennemy.innerHTML = NE[victories - (NE.length * 3)] + " ,La brute !";

        } else if (victories < NE.length * 5) {
            nom_ennemy.innerHTML = NE[victories - (NE.length * 4)] + " ,Le DIEU !";
        } else {
            satan = true;
            nom_ennemy.innerHTML = "SATAN !!!!!"
        }
    }
}


function gameover() {
    if (lezollard === 0 && victories >= 1 && (ta - dc) > (ac - da)) {
        player.classList.add("game_over");
        replay.classList.remove("replay");
        replay.classList.add("replay_gameover");
        actions.style.display = "none";
        ennemy.style.position = "absolute";
        ennemy.style.backgroundColor = "white";
        ennemy.style.left = "15%";
        lezollard_box.style.display = "none";
        V_NBR.innerHTML = victories + "<p style=\"font-size:20px; \">Game Over</p>";

    }
}

/* Les boutons */

multi_btn.addEventListener('click', multi_inc);
attaque_btn.addEventListener('click', attaque);
Give_ATK_CH.addEventListener('click', Attaque_plus);
Give_DEF_CH.addEventListener('click', Defense_plus);
Give_ARME_CH.addEventListener('click', Change_arme);

//Les affichages de début de jeu
ATK_CH.innerHTML = ac;
DEF_CH.innerHTML = dc;
K_NBR.innerHTML = kills;
DEF_ADV.innerHTML = da;
ATK_ADV.innerHTML = ta;
ARME_ADV.innerHTML = wa[ca].nom;
V_NBR.innerHTML = victories;
LZD.innerHTML = lezollard + "£";
nom_ennemy.innerHTML = NE[victories];
ARME_CH.innerHTML = "Épée";

//Les canvas
let canvas_CH = document.getElementById("CH_canvas");
let lizard_CH = canvas_CH.getContext("2d");
let canvas_ADV = document.getElementById("ADV_canvas");
let lizard_ADV = canvas_ADV.getContext("2d");
drawcanvas(lizard_CH, lizard_ADV);


function drawcanvas(lizard_CH, lizard_ADV) {

    //Shape0;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.strokeStyle = "rgba(0,0,0,1)";
    lizard_CH.lineWidth = 1;
    lizard_CH.lineCap = "butt";
    lizard_CH.lineJoin = "miter";
    lizard_CH.beginPath();
    lizard_CH.moveTo(20, 189);
    lizard_CH.bezierCurveTo(25, 151, 58, 67, 100, 36);
    lizard_CH.bezierCurveTo(138, 40, 154, 45, 181, 66);
    lizard_CH.bezierCurveTo(196, 87, 191, 113, 194, 129);
    lizard_CH.bezierCurveTo(174, 144, 148, 186, 114, 190);
    lizard_CH.bezierCurveTo(101, 191, 74, 194, 61, 195);
    lizard_CH.bezierCurveTo(51, 194, 30, 191, 20, 189);
    lizard_CH.closePath();
    lizard_CH.stroke();
    lizard_CH.shadowOffsetX = 15;
    lizard_CH.shadowOffsetY = 15;
    lizard_CH.shadowBlur = 0;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.fillStyle = "rgba(10,133,7,1)";
    lizard_CH.fill();

    //Shape1;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.strokeStyle = "rgba(0,0,0,1)";
    lizard_CH.lineWidth = 1;
    lizard_CH.lineCap = "butt";
    lizard_CH.lineJoin = "miter";
    lizard_CH.beginPath();
    lizard_CH.moveTo(27, 128);
    lizard_CH.bezierCurveTo(22, 127, 11, 126, 6, 125);
    lizard_CH.bezierCurveTo(11, 129, 20, 136, 25, 140);
    lizard_CH.bezierCurveTo(21, 144, 12, 152, 7, 156);
    lizard_CH.bezierCurveTo(11, 159, 18, 166, 21, 169);
    lizard_CH.bezierCurveTo(19, 176, 14, 190, 11, 197);
    lizard_CH.bezierCurveTo(17, 198, 28, 201, 33, 202);
    lizard_CH.bezierCurveTo(39, 198, 50, 191, 56, 187);
    lizard_CH.bezierCurveTo(59, 192, 64, 203, 66, 208);
    lizard_CH.bezierCurveTo(75, 207, 92, 205, 101, 204);
    lizard_CH.bezierCurveTo(111, 207, 132, 212, 142, 214);
    lizard_CH.bezierCurveTo(143, 212, 145, 207, 146, 205);
    lizard_CH.bezierCurveTo(143, 202, 137, 195, 134, 191);
    lizard_CH.bezierCurveTo(133, 187, 132, 180, 131, 176);
    lizard_CH.bezierCurveTo(129, 173, 124, 166, 122, 162);
    lizard_CH.bezierCurveTo(112, 159, 91, 152, 81, 148);
    lizard_CH.bezierCurveTo(77, 145, 68, 139, 63, 136);
    lizard_CH.bezierCurveTo(55, 133, 39, 126, 31, 123);
    lizard_CH.bezierCurveTo(28, 120, 23, 115, 20, 112);
    lizard_CH.bezierCurveTo(22, 116, 25, 124, 27, 128);
    lizard_CH.closePath();
    lizard_CH.stroke();
    lizard_CH.shadowOffsetX = 15;
    lizard_CH.shadowOffsetY = 15;
    lizard_CH.shadowBlur = 0;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.fillStyle = "rgba(93,229,46,1)";
    lizard_CH.fill();

    //Shape2;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.strokeStyle = "rgba(0,0,0,1)";
    lizard_CH.lineWidth = 1;
    lizard_CH.lineCap = "butt";
    lizard_CH.lineJoin = "miter";
    lizard_CH.beginPath();
    lizard_CH.moveTo(159, 77);
    lizard_CH.bezierCurveTo(171, 77, 181, 87, 181, 99);
    lizard_CH.bezierCurveTo(181, 111, 171, 121, 159, 121);
    lizard_CH.bezierCurveTo(147, 121, 137, 111, 137, 99);
    lizard_CH.bezierCurveTo(137, 87, 147, 77, 159, 77);
    lizard_CH.closePath();
    lizard_CH.stroke();
    lizard_CH.shadowOffsetX = 15;
    lizard_CH.shadowOffsetY = 15;
    lizard_CH.shadowBlur = 0;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.fillStyle = "rgba(255,255,255,1)";
    lizard_CH.fill();

    //Shape3;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.strokeStyle = "rgba(0,0,0,1)";
    lizard_CH.lineWidth = 1;
    lizard_CH.lineCap = "butt";
    lizard_CH.lineJoin = "miter";
    lizard_CH.beginPath();
    lizard_CH.moveTo(166, 85);
    lizard_CH.bezierCurveTo(174, 85, 180, 91, 180, 99);
    lizard_CH.bezierCurveTo(180, 107, 174, 113, 166, 113);
    lizard_CH.bezierCurveTo(158, 113, 152, 107, 152, 99);
    lizard_CH.bezierCurveTo(152, 91, 158, 85, 166, 85);
    lizard_CH.closePath();
    lizard_CH.stroke();
    lizard_CH.shadowOffsetX = 15;
    lizard_CH.shadowOffsetY = 15;
    lizard_CH.shadowBlur = 0;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.fillStyle = "rgba(246,243,13,1)";
    lizard_CH.fill();

    //Shape4;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.strokeStyle = "rgba(0,0,0,1)";
    lizard_CH.lineWidth = 1;
    lizard_CH.lineCap = "butt";
    lizard_CH.lineJoin = "miter";
    lizard_CH.beginPath();
    lizard_CH.moveTo(174, 89);
    lizard_CH.bezierCurveTo(178, 89, 182, 93, 182, 98);
    lizard_CH.bezierCurveTo(182, 102, 178, 106, 174, 106);
    lizard_CH.bezierCurveTo(169, 106, 165, 102, 165, 98);
    lizard_CH.bezierCurveTo(165, 93, 169, 89, 174, 89);
    lizard_CH.closePath();
    lizard_CH.stroke();
    lizard_CH.shadowOffsetX = 15;
    lizard_CH.shadowOffsetY = 15;
    lizard_CH.shadowBlur = 0;
    lizard_CH.shadowColor = "rgba(0,0,0,0)";
    lizard_CH.fillStyle = "rgba(5,0,0,1)";
    lizard_CH.fill();

    //Shape0;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.strokeStyle = "rgba(0,0,0,1)";
    lizard_ADV.lineWidth = 1;
    lizard_ADV.lineCap = "butt";
    lizard_ADV.lineJoin = "miter";
    lizard_ADV.beginPath();
    lizard_ADV.moveTo(180, 189);
    lizard_ADV.bezierCurveTo(175, 151, 142, 67, 100, 36);
    lizard_ADV.bezierCurveTo(62, 40, 46, 45, 19, 66);
    lizard_ADV.bezierCurveTo(4, 87, 9, 113, 6, 129);
    lizard_ADV.bezierCurveTo(26, 144, 52, 186, 86, 190);
    lizard_ADV.bezierCurveTo(99, 191, 126, 194, 139, 195);
    lizard_ADV.bezierCurveTo(149, 194, 170, 191, 180, 189);
    lizard_ADV.closePath();
    lizard_ADV.stroke();
    lizard_ADV.shadowOffsetX = -15;
    lizard_ADV.shadowOffsetY = 15;
    lizard_ADV.shadowBlur = 0;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    grad = lizard_ADV.createLinearGradient(46, 211, 188, 170);
    grad.addColorStop(0, "rgba(243,60,11,1)");
    grad.addColorStop(1, "rgba(93,229,46,1)");
    lizard_ADV.fillStyle = grad;
    lizard_ADV.fill();

    //Shape1;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.strokeStyle = "rgba(0,0,0,1)";
    lizard_ADV.lineWidth = 1;
    lizard_ADV.lineCap = "butt";
    lizard_ADV.lineJoin = "miter";
    lizard_ADV.beginPath();
    lizard_ADV.moveTo(173, 128);
    lizard_ADV.bezierCurveTo(178, 127, 189, 126, 194, 125);
    lizard_ADV.bezierCurveTo(189, 129, 180, 136, 175, 140);
    lizard_ADV.bezierCurveTo(180, 144, 189, 152, 193, 156);
    lizard_ADV.bezierCurveTo(190, 159, 183, 166, 179, 169);
    lizard_ADV.bezierCurveTo(182, 176, 187, 190, 189, 197);
    lizard_ADV.bezierCurveTo(184, 198, 173, 201, 167, 202);
    lizard_ADV.bezierCurveTo(161, 198, 150, 191, 144, 187);
    lizard_ADV.bezierCurveTo(142, 192, 137, 203, 134, 208);
    lizard_ADV.bezierCurveTo(125, 207, 108, 205, 99, 204);
    lizard_ADV.bezierCurveTo(89, 207, 68, 212, 58, 214);
    lizard_ADV.bezierCurveTo(57, 212, 55, 207, 54, 205);
    lizard_ADV.bezierCurveTo(57, 202, 63, 195, 66, 191);
    lizard_ADV.bezierCurveTo(67, 187, 68, 180, 69, 176);
    lizard_ADV.bezierCurveTo(71, 173, 76, 166, 78, 162);
    lizard_ADV.bezierCurveTo(88, 159, 109, 152, 119, 148);
    lizard_ADV.bezierCurveTo(124, 145, 133, 139, 137, 136);
    lizard_ADV.bezierCurveTo(145, 133, 161, 126, 169, 123);
    lizard_ADV.bezierCurveTo(172, 120, 177, 115, 180, 112);
    lizard_ADV.bezierCurveTo(178, 116, 175, 124, 173, 128);
    lizard_ADV.closePath();
    lizard_ADV.stroke();
    lizard_ADV.shadowOffsetX = -15;
    lizard_ADV.shadowOffsetY = 15;
    lizard_ADV.shadowBlur = 0;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.fillStyle = "rgba(93,229,46,1)";
    lizard_ADV.fill();

    //Shape2;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.strokeStyle = "rgba(0,0,0,1)";
    lizard_ADV.lineWidth = 1;
    lizard_ADV.lineCap = "butt";
    lizard_ADV.lineJoin = "miter";
    lizard_ADV.beginPath();
    lizard_ADV.moveTo(41, 77);
    lizard_ADV.bezierCurveTo(29, 77, 19, 87, 19, 99);
    lizard_ADV.bezierCurveTo(19, 111, 29, 121, 41, 121);
    lizard_ADV.bezierCurveTo(53, 121, 63, 111, 63, 99);
    lizard_ADV.bezierCurveTo(63, 87, 53, 77, 41, 77);
    lizard_ADV.closePath();
    lizard_ADV.stroke();
    lizard_ADV.shadowOffsetX = -15;
    lizard_ADV.shadowOffsetY = 15;
    lizard_ADV.shadowBlur = 0;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.fillStyle = "rgba(241,242,240,1)";
    lizard_ADV.fill();

    //Shape3;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.strokeStyle = "rgba(0,0,0,1)";
    lizard_ADV.lineWidth = 1;
    lizard_ADV.lineCap = "butt";
    lizard_ADV.lineJoin = "miter";
    lizard_ADV.beginPath();
    lizard_ADV.moveTo(34, 85);
    lizard_ADV.bezierCurveTo(26, 85, 20, 91, 20, 99);
    lizard_ADV.bezierCurveTo(20, 107, 26, 113, 34, 113);
    lizard_ADV.bezierCurveTo(42, 113, 48, 107, 48, 99);
    lizard_ADV.bezierCurveTo(48, 91, 42, 85, 34, 85);
    lizard_ADV.closePath();
    lizard_ADV.stroke();
    lizard_ADV.shadowOffsetX = -15;
    lizard_ADV.shadowOffsetY = 15;
    lizard_ADV.shadowBlur = 0;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.fillStyle = "rgba(223,229,46,1)";
    lizard_ADV.fill();

    //Shape4;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.strokeStyle = "rgba(0,0,0,1)";
    lizard_ADV.lineWidth = 1;
    lizard_ADV.lineCap = "butt";
    lizard_ADV.lineJoin = "miter";
    lizard_ADV.beginPath();
    lizard_ADV.moveTo(27, 89);
    lizard_ADV.bezierCurveTo(22, 89, 18, 93, 18, 98);
    lizard_ADV.bezierCurveTo(18, 102, 22, 106, 27, 106);
    lizard_ADV.bezierCurveTo(31, 106, 35, 102, 35, 98);
    lizard_ADV.bezierCurveTo(35, 93, 31, 89, 27, 89);
    lizard_ADV.closePath();
    lizard_ADV.stroke();
    lizard_ADV.shadowOffsetX = -15;
    lizard_ADV.shadowOffsetY = 15;
    lizard_ADV.shadowBlur = 0;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.fillStyle = "rgba(4,4,4,1)";
    lizard_ADV.fill();

    //Shape5;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.strokeStyle = "rgba(0,0,0,1)";
    lizard_ADV.lineWidth = 1;
    lizard_ADV.lineCap = "butt";
    lizard_ADV.lineJoin = "miter";
    lizard_ADV.beginPath();
    lizard_ADV.moveTo(9, 80);
    lizard_ADV.lineTo(68, 57);
    lizard_ADV.lineTo(71, 65);
    lizard_ADV.lineTo(12, 88);
    lizard_ADV.lineTo(9, 80);
    lizard_ADV.closePath();
    lizard_ADV.stroke();
    lizard_ADV.shadowOffsetX = 15;
    lizard_ADV.shadowOffsetY = 15;
    lizard_ADV.shadowBlur = 0;
    lizard_ADV.shadowColor = "rgba(0,0,0,0)";
    lizard_ADV.fillStyle = "rgba(36,133,23,1)";
    lizard_ADV.fill();
}