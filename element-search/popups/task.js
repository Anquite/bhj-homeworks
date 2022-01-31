let closeBtns = document.querySelectorAll(".modal__close");

document.getElementById("modal_main").className += " modal_active";

for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        this.closest(".modal").className = "modal";
    }
}

document.querySelector(".show-success").onclick = function() {
    document.getElementById("modal_success").className += " modal_active";
    document.getElementById("modal_main").className = " modal";
}