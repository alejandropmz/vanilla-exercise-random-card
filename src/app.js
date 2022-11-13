/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { auto } from "@popperjs/core";

window.onload = function() {
  let changeButton = document.getElementById("button-change");
  let header = document.getElementsByClassName("header");
  let center = document.getElementsByClassName("center");
  let footer = document.getElementsByClassName("footer");
  let phrase = document.getElementById("phrase");
  let rigoPhrase = document.querySelector(".text");
  let autoButton = document.getElementById("auto-button");
  let card = document.getElementById("card");
  let height = document.getElementById("height").value;
  let width = document.getElementById("width").value;
  let buttonSize = document.getElementById("button-size");

  //Arrays

  let cardArray = ["♦", "♥", "♠", "♣"];
  let letterCardArray = ["K", "Q", "J", "A"];
  let arrayPhrase = [
    "You are the king playing that!!!",
    "Nice player.. you are the queen in this room...",
    "You got win all games...",
    "No way!! you are good player!"
  ];
  let rigoPhrases = [
    "I'm excited!!",
    "I'm good for this...",
    "I like poker games!!",
    "Rigo like money games"
  ];

  //contador de suerte
  let luckyCounter = 0;

  // cambio de cartas
  function changeCard() {
    let arraySelects = Math.floor(Math.random() * 4); // numero aleatorio para arrays
    let symbolCard = cardArray[arraySelects];

    let selectNumber = Math.floor(Math.random() * 13) + 1; // numero aleatorio de cartas
    if (
      selectNumber == 1 ||
      selectNumber == 11 ||
      selectNumber == 12 || // condicionales de las cartas
      selectNumber == 13
    ) {
      luckyCounter = 0;
      var numberCard = letterCardArray[arraySelects];
      phrase.innerHTML = arrayPhrase[arraySelects];
      phrase.style.background = "rgb(66, 66, 166)";
      rigoPhrase.innerHTML = rigoPhrases[arraySelects];
      if (arraySelects == 0) {
        rigoPhrase.style.background = "rgba(246,230,205,255)";
      }
    } else {
      luckyCounter++;
      var numberCard = selectNumber;
      phrase.innerHTML = "Let's play game!!";
      phrase.style.background = "green";
      rigoPhrase.innerHTML = "Rigo is playing cards";
      if (arraySelects != 0) {
        rigoPhrase.style.background = "rgba(255, 193, 7, 255)";
      }

      if (luckyCounter == 5) {
        luckyCounter = 0;
        phrase.innerHTML = "Calm down, you luck come in soon...";
        phrase.style.background = "rgba(255,193,7,255)";
      }
    }

    if (arraySelects <= 1) {
      // condicional de color de las cartas
      header[0].style.color = "red";
      center[0].style.color = "red";
      footer[0].style.color = "red";
    } else {
      header[0].style.color = "";
      center[0].style.color = "";
      footer[0].style.color = "";
    }

    // proceso de sustitución de las cartas
    header[0].innerHTML = `<p class="number">${numberCard}</p><p>${symbolCard}</p>`;
    center[0].innerHTML = `<p>${symbolCard}</p><p>${symbolCard}</p><p id="inverted" class="reverse-symbol">${symbolCard}</p>`;
    footer[0].innerHTML = `<p>${symbolCard}</p><p>${numberCard}</p>`;
  }

  // boton de automatización de la carta
  autoButton.addEventListener("click", function() {
    //clearInterval(automaticButtom);
    let automaticButtom = setInterval(() => {
      changeCard();
    }, 5000);
    autoButton.innerHTML = "Now your card is automatic";
  });

  // boton que cambia la carta
  changeButton.addEventListener("click", function() {
    changeCard();
  });

  // boton que cambia el tamaño de la carta
  buttonSize.addEventListener("click", function() {
    card.style.height = `${height}px`;
    card.style.width = `${width}px`;
  });
};
