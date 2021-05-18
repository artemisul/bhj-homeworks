'use strict';

let kills = document.getElementById('dead').textContent;
let misses = document.getElementById('lost').textContent;

const game = document.querySelector('.hole-game');
const newGame = () => {
    document.getElementById('dead').textContent = 0;
    document.getElementById('lost').textContent = 0;
    kills = 0;
    misses = 0;
}

game.onclick = (event) => {
    let target = event.target;
    if (target.classList.contains('hole_has-mole')) {
        kills++;
        document.getElementById('dead').textContent = kills;
        if (kills === 10) {
            alert('Вы выиграли!');
            newGame();
        }
    } else {
        misses++;
        document.getElementById('lost').textContent = misses;
        if (misses === 5) {
            alert('Вы проиграли!');
            newGame()
        }
    }
}