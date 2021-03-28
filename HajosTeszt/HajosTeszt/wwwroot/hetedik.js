var kérdés;
var helyzet = 0;

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

    for (var i = 1; i < 4; i++) {
        console.log(i)
        let elem = document.getElementById("válasz" + i)
        elem.innerHTML = kérdés[k]["answer" + i]
    }

    if (document.getElementById("akép").src != "") {
        document.getElementById("akép").src = kérdés[k].image
    }
}

function Léptetelőre() {
    if (helyzet == kérdés.length - 1) {
        helyzet = 0;
        kérdésMegjelenítés(helyzet);
        clear();
    }
    else {
        helyzet++;
        kérdésMegjelenítés(helyzet);
        clear();
    }
}

function Léptethátra() {
    if (helyzet == 0) {
        helyzet = kérdés.length - 1;
        kérdésMegjelenítés(helyzet);
        clear();
    }
    else {
        helyzet--;
        kérdésMegjelenítés(helyzet);
        clear();
    }
}

function ellenőriz(k) {
    let elem = document.getElementById("válasz" + k);
    if (kérdés[helyzet]["correctAnswer"] == k) {
        elem.style.backgroundColor = "green";
    }
    else {
        elem.style.backgroundColor = "red";
        let jóválasz = document.getElementById("válasz" + kérdés[helyzet]["correctAnswer"]);
        jóválasz.style.backgroundColor = "green";
    }
}

function clear() {
    for (var i = 1; i < 4; i++) {
        let elem = document.getElementById("válasz" + i)
        elem.style.backgroundColor = "rgb(255, 183, 3)";
    }
}
