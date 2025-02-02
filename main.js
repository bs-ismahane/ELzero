let menu = document.querySelector("header .container>ul>li:last-of-type");
let megamenu = document.querySelector("header .container ul li .megamenu");
menu.onclick = function() {
    megamenu.classList.toggle("activeMegaMenu");
  };
