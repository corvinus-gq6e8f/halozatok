var kérdés;

window.onload = letöltés();

function letöltés() {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
    ) 
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdés = d;
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés(k) {
    let ide = document.getElementById("kérdés_szöveg");
    ide.innerHTML = kérdés[k].questionText

    for (var i = 1; i <= 3; i++) {
        console.log(i)
        let elem = document.getElementById("válasz" + i)
        elem.innerHTML = kérdés[k]["answer" + i]
    }

    if (document.getElementById("akép").src != "") {
        document.getElementById("akép").src = kérdés[k].image
    }
}

