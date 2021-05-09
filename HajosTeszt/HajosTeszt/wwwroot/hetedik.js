var kérdés;
var helyzet = 0;

window.onload = letöltés();

function letöltés() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        ); 
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdés = d;
    kérdésMegjelenítés(helyzet);
}

function kérdésBetöltés(id) {
    fetch(/questions/${id})
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json();
            }
        })
        .then(data => kérdésMegjelenítés(data));
}

/*function kérdésMegjelenítés(k) {
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
}*/
function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (document.getElementById("akép").src != "") {
        document.getElementById("akép").src = kérdés.image
    }
}

function Léptetelőre() {
    if (helyzet == 858) {
        helyzet = 0;
        kérdésBetöltés(0);
        clear();
    }
    else {
        helyzet++;
        kérdésBetöltés(helyzet);
        clear();
    }
}

function Léptethátra() {
    if (helyzet == 0) {
        helyzet = 858;
        kérdésBetöltés(helyzet);
        clear();
    }
    else {
        helyzet--;
        kérdésBetöltés(helyzet);
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
