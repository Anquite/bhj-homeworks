const menuLink = document.getElementsByClassName("menu__link");
const subMenuLink = document.querySelectorAll(".menu.menu_sub .menu__item .menu__link");

for (let i = 0; i < menuLink.length; i++) {
    const menuSub = menuLink[i].closest("li").querySelector(".menu_sub");
    menuLink[i].onclick = function() {
        if (menuSub != null && menuSub.className === "menu menu_sub") {
            menuSub.className += " menu_active";
        } else if (menuSub != null) {
            menuSub.className = "menu menu_sub";
        }
        return false
    }
}

for (let i = 0; i < subMenuLink.length; i++) {
    subMenuLink[i].onclick = function() {
        return true;
    }
}

for (let i = 0; i < document.getElementsByClassName("super").length; i++) {
    document.getElementsByClassName("super")[i].onclick = () => { return true; }
}