ARME_ADV.innerHTML = wa[ca].nom;
let K_NBR = document.getElementById("K_nbr");
let kills = 0;
K_NBR.innerHTML = kills;



let ATK_ADV = document.getElementById("ATK_ADV");
let da = (kills * 2) * Math.PI * wa[ca].atk;
ATK_ADV.innerHTML = da;


let DEF_ADV = document.getElementById("DEF_ADV");
DEF_ADV.innerHTML = kills + Math.round(da / 2);