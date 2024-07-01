//import "./options";

let life = 40;
let commDmg = 0;
let commTax = 0;

function displayLife() {
    document.getElementById("lifeDisplay").innerText = life;
}

function displayCommanderDmg() {
    document.getElementById("commDmgDisplay").innerText = commDmg;
}

function displayCommanderTax() {
    document.getElementById("commTaxDisplay").innerText = commTax;
}

setInterval(displayLife, 50);
setInterval(displayCommanderDmg, 50);
setInterval(displayCommanderTax, 50);

function lifeUp() {
    life++;
}

function lifeDown() {
    life--;
}

function lifeSet(i) {
    life = i;
}

function commanderDmgUp() {
    commDmg++;
}

function commanderDmgDown() {
    commDmg--;
}

function commanderDmgSet(i) {
    commDmg = i;
}

function commanderTaxUp() {
    commTax++;
}

function commanderTaxDown() {
    commTax--;
}

function commanderTaxSet(i) {
    commTax = i;
}
