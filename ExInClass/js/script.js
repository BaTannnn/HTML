
function init() {
    console.info("INIT " + Math.random());
}

function doiMau(obj) {
    //alert(obj.value);
    let d = document.getElementById('body');
    d.setAttribute("style", `background-color:${obj.value}`);
    //d.style.backgroundColor = obj.value;
}

function giaiBac1() {
    let a = document.getElementById("aId");
    let b = document.getElementById("bId");

    let d = document.getElementById('result');
    if (a !== null && b !== null) {
        if (a.value === "" || b.value === "") {
            d.innerHTML = "<h1 style='color:red !important;'>Vui long nhap a, b!</h1>";
        } else {
            a = parseFloat(a.value);
            b = parseFloat(b.value);

            let msg = "";
            if (a === 0) {
                if (b === 0)
                    msg = "VO SO NGHIEM";
                else
                    msg = "VO NGHIEM";
            } else {
                msg = `Nghiem x = ${(-b / a).toFixed(2)}`;
            }


            d.innerHTML = `<h1 style="color:blue;">${msg}</h1>`;
        }


    }
}

function changeImg(obj) {
    //alert(obj.src);
    let d = document.getElementById("main");
    d.src = obj.src;
    //d.setAttribute("src", obj.src);
}

window.onload = function () {
    let images = document.querySelectorAll(".thumb img");
    for (let im of images) {
        im.addEventListener("click", function () {
            changeImg(this);
        });
        // im.onclick = function () {
        //     changeImg(this);
        // }
    }
    let c = document.getElementById("clock");
    setInterval(function () {
        let now = new Date();
        c.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }, 1000);

    let play = document.getElementById("play");
    let ball = document.getElementById("ball");
    let game = document.getElementById("game");
    let timer = null;
    let le = 0;
    let to = 0;
    let incx = 5;
    let incy = 5;
    play.onclick = function () {

        timer = setInterval(function () {
            if (ball.clientHeight + to >= game.clientHeight || to < 0)
                incy = -incy;
            if (ball.clientWidth + le >= game.clientWidth || le < 0)
                incx = -incx;

            le += incx;
            to += incy;

            ball.style.left = `${le}px`;
            ball.style.top = `${to}px`;
        }, 10);
    }

    let stop = document.getElementById("stop");
    stop.onclick = function () {
        if (timer !== null)
            clearInterval(timer);
    }
}

