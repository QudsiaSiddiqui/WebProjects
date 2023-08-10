var num = Math.floor(Math.random() * 6) + 1;
var diceimg = "D:/MyCodingProjects/Web development/images/dice" + num + ".png";
var imgElement = document.querySelectorAll("img")[0];
imgElement.setAttribute("src", diceimg);

var num1 = Math.floor(Math.random() * 6) + 1;
var diceimg1 = "D:/MyCodingProjects/Web development/images/dice" + num1 + ".png";
var imgElement1 = document.querySelectorAll("img")[1];
imgElement1.setAttribute("src", diceimg1);

if (num > num1) {
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if (num1 > num) {
    document.querySelector("h1").innerHTML = "Player2 wins";
} else if (num = num1) {
    document.querySelector("h1").innerHTML = "DRAW";
}