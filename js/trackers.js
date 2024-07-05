let life = 0;
let commDmg = 0;
let commTax = 0;

function initLife(amount) {
    life = amount;
}

/* onload = () => {
    console.log('before:', life);
    initLife(life);
    console.log('after:', life);
}; */

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

function commanderDmgUp() {
    commDmg++;
}

function commanderDmgDown() {
    commDmg--;
}

function commanderTaxUp() {
    commTax++;
}

function commanderTaxDown() {
    commTax--;
}
