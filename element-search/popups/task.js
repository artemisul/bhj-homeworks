'use strict';

let main = document.querySelector('#modal_main');
let close = document.querySelectorAll('.modal__close');
let show = document.querySelector('.show-success');
let success = document.querySelector('#modal_success');

main.classList.add('modal_active');

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        main.classList.remove('modal_active');
        success.classList.remove('modal_active');
    });
}

show.addEventListener('click', function() {
    success.classList.add('modal_active');
});