let multi_btn = document.getElementById("MULTI_BTN");
let multi = 1;

let attaque_btn = document.getElementById("ATTAQUE_BTN");

let lezollard = 0;

multi_btn.addEventListener('click', multi_inc);
attaque_btn.addEventListener('click', attaque);


function multi_inc() {

}

function attaque() {
    if ((ATK_ADV - DEF_CH) < (ATK_CH - DEF_ADV)) {
        victories += 1;
        lezollard += 20;
    } else {
        kills += 1;
        ca += 1;
    }
}