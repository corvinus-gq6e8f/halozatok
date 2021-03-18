window.onload = function () {
    let hova = document.getElementById("ide");
    document.getElementById("ide").innerHTML = '';
    for (var i = 1; i < 11; i++) {
        var ujDiv = document.createElement("div");
        ujDiv.classList.add("sorban");
        ujDiv.id = i;
        ujDiv.innerText = i;
        hova.appendChild(ujDiv);
    }
}