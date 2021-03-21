window.onload = function () {
    let hova = document.getElementById("ide");
    document.getElementById("ide").innerHTML = '';
    for (var i = 1; i < 11; i++) {
        var ujDiv = document.createElement("div");
        ujDiv.classList.add("sorban");
        ujDiv.id = i;
        ujDiv.innerText = i;
        ujDiv.style.backgroundColor = "rgba(0,0,255,"+(i*0.1)+")"
        hova.appendChild(ujDiv);
    }

    let hova2 = document.getElementById("pascal");
    for (var n = 0; n < 10; n++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova2.appendChild(sor);
        for (var k = 0; k < n+1; k++) {
            let szám = document.createElement("div");
            szám.classList.add("elem");
            let x = binomialis(n, k);
            szám.innerText = x;
            sor.appendChild(szám);
        }
    }
}
var faktorialis = function (n) {
        let er = 1;
        for (let i = 2;  i <= n; i++) {
            er = er * i;
        }
        return er;
    }

    var binomialis = function (a, b) {
        let n = faktorialis(a);
        let k = faktorialis(b);
        let kn = faktorialis(a - b);
        let x = n / (k * kn);
        return x;
    }