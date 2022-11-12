/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { auto } from "@popperjs/core";

window.onload = function() {
  let rigoText = document.getElementsByClassName("text");

  let cardNumber = document.getElementsByClassName("number"); //number top es [0] y inferior [1]

  let centerSymbol2 = document.getElementsByTagName("p"); // simbolos del centro

  let otherSymbol = document.querySelector(".symbol-top"); // simbolos del header

  let otherSymbol2 = document.querySelector(".symbol-botom"); // simbolos del footer

  let changeCard = document.getElementById("button-change");

  let prhase = document.getElementById("phrase");

  let autoButton = document.getElementById("auto-button");

  let cardStyle = document.getElementById("card");

  let buttonSize = document.getElementById("button-size");

  let input = document.getElementById("height").value;

  let input2 = document.getElementById("width").value;

  let arrayCards = ["♦", "♥", "♠", "♣"];

  let arrayPhrase = [
    "You are the king playing that!!!",
    "Nice player.. you are the queen in this room...",
    "You got win all games...",
    "No way!! you are good player!"
  ];

  let luckyCounter = 0;

  function game() {
    let symbolNum = Math.floor(Math.random() * 4);

    centerSymbol2[0].innerHTML = arrayCards[symbolNum];
    centerSymbol2[1].innerHTML = arrayCards[symbolNum];
    centerSymbol2[2].innerHTML = arrayCards[symbolNum];
    otherSymbol.innerHTML = arrayCards[symbolNum];
    otherSymbol2.innerHTML = arrayCards[symbolNum];

    if (symbolNum <= 1) {
      cardNumber[0].style.color = "red";
      cardNumber[1].style.color = "red";
      centerSymbol2[0].style.color = "red";
      centerSymbol2[1].style.color = "red";
      centerSymbol2[2].style.color = "red";
      otherSymbol.style.color = "red";
      otherSymbol2.style.color = "red";
    } else if (symbolNum => 3) {
      cardNumber[0].style.color = "black";
      cardNumber[1].style.color = "black";
      centerSymbol2[0].style.color = "black";
      centerSymbol2[1].style.color = "black";
      centerSymbol2[2].style.color = "black";
      otherSymbol.style.color = "black";
      otherSymbol2.style.color = "black";
    }

    let numCard = Math.floor(Math.random() * 13) + 1;
    cardNumber[0].innerHTML = numCard;
    cardNumber[1].innerHTML = numCard;

    if (numCard == 1) {
      cardNumber[0].innerHTML = "K";
      cardNumber[1].innerHTML = "K";
      prhase.innerHTML = arrayPhrase[0];
      rigoText[0].innerHTML = "Rigo is excited!!!";
      luckyCounter = 0;
    } else if (numCard == 11) {
      cardNumber[0].innerHTML = "Q";
      cardNumber[1].innerHTML = "Q";
      prhase.innerHTML = arrayPhrase[1];
      rigoText[0].innerHTML = "Rigo is playing cards";
      luckyCounter = 0;
    } else if (numCard == 12) {
      cardNumber[0].innerHTML = "J";
      cardNumber[1].innerHTML = "J";
      prhase.innerHTML = arrayPhrase[2];
      rigoText[0].innerHTML = "Rigo is playing cards";
      luckyCounter = 0;
    } else if (numCard == 13) {
      cardNumber[0].innerHTML = "A";
      cardNumber[1].innerHTML = "A";
      prhase.innerHTML = arrayPhrase[3];
      rigoText[0].innerHTML = "Rigo is playing cards";
      luckyCounter = 0;
    } else {
      prhase.innerHTML = "";
      rigoText[0].innerHTML = "Rigo is playing cards";
      luckyCounter++;
    }

    if (luckyCounter == 5) {
      prhase.innerHTML = "Calm down, you luck come in soon...";
      rigoText[0].innerHTML = "Rigo is worried...";
      luckyCounter = 0;
    }
  }

  let automaticButtom = setInterval(() => {
    game();
  }, 5000);

  autoButton.addEventListener("click", function() {
    // poder activar y desactivar el setinterval
    clearInterval(automaticButtom);
    autoButton.innerHTML = "To start again, reload page";
  });

  changeCard.addEventListener("click", function() {
    game();
  });

  buttonSize.addEventListener("click", function() {
    cardStyle.style.height = input + "px";
    cardStyle.style.width = input2 + "px";
    console.log("click button");
  });
};

// agregar lo demás adicional del ejercico
// y agregar si es posible las imagener de las cartas (rey y reina) para darle mayor presencia
