const cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");

function clicks() {

    clickerCounter.textContent++;
    cookie.width === 200 ? cookie.width = 100 : cookie.width = 200
};

cookie.onclick = clicks;