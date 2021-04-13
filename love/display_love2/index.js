var arr = "2021-03-07 00:00:00".split(/[- :]/);
var box = document.getElementsByClassName("textCon")[0];

function init() {
    var e = box.offsetWidth;
    var a = parseInt(e / 50 * 5);
    for (var c = 0; c < a; c++) {
        var d = parseInt(ran(60, 120) / 10);
        var b = document.createElement("div");
        b.classList.add("item");
        b.style.width = d + "px";
        b.style.height = d + "px";
        b.style.left = ran(0, 95) + "%";
        b.style.top = ran(20, 80) + "%";
        b.style.animationDelay = ran(0, 30) / 10 + "s";
        box.appendChild(b)
    }
}

function ran(b, a) {
    b = parseInt(b);
    a = parseInt(a);
    return Math.floor(Math.random() * (a - b + 1)) + b
}

function timer_start() {
    var f = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    var b = parseInt(new Date() - f) / 1000;
    var e = parseInt(b % 60);
    if (e < 10) {
        e = "0" + e
    }
    b = parseInt(b / 60);
    var d = b % 60;
    if (d < 10) {
        d = "0" + d
    }
    b = parseInt(b / 60);
    var c = b % 24;
    if (c < 10) {
        c = "0" + c
    }
    b = parseInt(b / 24);
    var a = b;
    document.getElementsByClassName("days-number")[0].innerHTML = ("" + a);
    document.getElementsByClassName("seconds")[0].innerHTML = (c + " 时 " + d + " 分 " + e + " 秒")
}

window.setInterval(timer_start, 1000);
timer_start();
init();