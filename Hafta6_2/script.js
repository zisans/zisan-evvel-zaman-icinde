document.getElementById("btn").onclick = function () {
    let k = document.getElementById("kutu");

    if (k.style.background === "pink") {
        k.style.background = "blue";
    } else {
        k.style.background = "pink";
    }
};