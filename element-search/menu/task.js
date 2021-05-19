'use strict';

const menuLink = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuLink.length; i++) {
  const otherMenu = menuLink.item(i).parentElement.querySelector(".menu_sub");
  menuLink.item(i).onclick = () => {
    if (otherMenu) {
      if (!otherMenu.classList.contains("menu_active")) {
        otherMenu.classList.toggle("menu_active");
      } else {
        otherMenu.classList.toggle("menu_active");
      }     
      return false;
    }
  }
}
