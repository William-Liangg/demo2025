function moveRandomE1(elm) {
    elm.style.transition = "top 0.5s, left 0.5s";
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
moveRandom.style.position = "relative";
moveRandom.addEventListener("mouseenter", function (e) {
    mmoveTimeout = setTimeout(() => {
        moveRandomE1(e.target);
    }, 85)
});