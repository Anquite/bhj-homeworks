const reveal = document.querySelectorAll(".reveal");

function revealCheck() {
    for (let i = 0; i < reveal.length; i++) {
        let y = reveal[i].getBoundingClientRect().y;
        let top = reveal[i].getBoundingClientRect().top;

        if (top >= 0 && top <= 700) {
            reveal[i].classList.add("reveal_active");
        }
    }
}

document.addEventListener("scroll", revealCheck);