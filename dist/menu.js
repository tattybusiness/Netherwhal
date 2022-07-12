const menu = document.querySelector('#hamburger');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');
const links = document.querySelector('#menuItems');

const changeMenu = () => {
    line1.classList.toggle("active1");
    line2.classList.toggle("active2");
    line3.classList.toggle("active3");
    links.classList.toggle("showNav");
}

menu.addEventListener("click", changeMenu);