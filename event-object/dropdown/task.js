'use strict';

let value = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let item = document.querySelector('.dropdown__item');
let link = document.querySelector('.dropdown__link');

const dropdown = () => {
    list.className = 'dropdown__list dropdown__list_active';
}
value.addEventListener('click', dropdown);

const menuItems = document.getElementsByClassName('dropdown__item');
for (let i = 0; i < menuItems.length; i++) {
    menuItems.item(i).onclick = function() {
        value.textContent = menuItems.item(i).textContent;
        list.classList.remove('dropdown__list_active');
        return false;
    }
}