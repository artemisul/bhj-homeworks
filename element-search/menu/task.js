'use strict';

let menuLink = document.querySelectorAll('.menu_sub');
for (let i = 0; i < menuLink.length; i++) {
    let otherMenu = menuLink[i].previousSibling.previousSibling;

    otherMenu.addEventListener('click', function() {
        event.preventDefault();
        if (menuLink[i].classList.contains('menu_active')) {
            menuLink[i].classList.remove('menu_active');
        } else {
            menuLink[i].classList.add('menu_active');
        }
    });

    otherMenu.addEventListener('blur', function() {
        if (menuLink[i].classList.contains('menu_active')) {
            menuLink[i].classList.remove('menu_active');
        }
    });
}
