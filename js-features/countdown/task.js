
let text = setInterval(function() {
    let timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(text)
    }
}, 1000)