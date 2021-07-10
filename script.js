function ask_name(){
    var p1 = prompt("Enter Player 1 name:")
    var p2 = prompt("Enter Player 2 name:")
    p1 = p1.toUpperCase();
    p2 = p2.toUpperCase();
    document.getElementById("p1").innerText = p1
    document.getElementById("p2").innerText = p2
}


var random1 = Math.random();
random1 = (random1 * 6) + 1;
random1 = Math.floor(random1);

var pic1 = "images/dice" + random1 + ".png"

function randompic1() {
    document.getElementsByClassName("img1")[0].src = pic1
    document.getElementsByClassName("img1")[0].classList.add("animate");
    setTimeout(function(){document.getElementsByClassName("img1")[0].classList.remove("animate")},1000);
}

var random2 = Math.random();
random2 = (random2 * 6) + 1;
random2 = Math.floor(random2);

var pic2 = "images/dice" + random2 + ".png"

function randompic2() {
    document.getElementsByClassName("img2")[0].src =  pic2
    document.getElementsByClassName("img2")[0].classList.add("animate");
    setTimeout(function(){document.getElementsByClassName("img2")[0].classList.remove("animate")},1000);
}

function winner() {
    var player1 = document.getElementById("p1").innerText;
    var player2 = document.getElementById("p2").innerText;
    var winner_name = ""
    if (random1 == random2) {
        winner_name = "It's a Draw"
    } else if (random1 > random2) {
        winner_name = "🚩 " + player1 + " wins"
    } else if (random1 < random2) {
        winner_name = "🚩 " + player2 + " wins"
    }

    document.querySelector("h1").innerHTML = winner_name
}

function player(){
    var square = document.getElementById("click_this")
    square.style.borderColor =  "#393E46"
    square.style.backgroundColor = "transparent"
    square.style.fontSize = "8rem"

    var audio = new Audio("swiftly.mp3")
    audio.play();
    randompic2();
    randompic1();
    winner();
    setTimeout(function(){location.reload();},4000)
}