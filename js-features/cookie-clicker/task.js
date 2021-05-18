'use strict';

const clicker = document.getElementById('cookie');

let bigCoockie = 200;
let smallCookie = 190;
function click() {
    const clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent++;
    if (clicker.width == bigCoockie) {
        clicker.width = smallCookie;
    } else {
        clicker.width = bigCoockie;
    }
}

clicker.onclick = click;

