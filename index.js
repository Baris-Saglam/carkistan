var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImage2);

var h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "⚔️👊🚩 Çarkı alt ettin!";
} else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Zar döndü, çark güldü. Şans bu sefer onda! 🕷️💀😈";
} else {
  h1.innerHTML = "Çark'la el sıkıştın…";
}
