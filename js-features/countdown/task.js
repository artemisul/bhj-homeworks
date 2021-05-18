'use strict';

function timer () {
    let element = document.getElementById('timer');
    if (element.innerHTML > 0) {
        element.innerHTML--;
        setTimeout(timer, 1000);
    }
    else alert('Выпобедили в конкурсе!');
}
setTimeout(timer, 1000);