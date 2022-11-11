/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let btnChange = document.getElementById("button-change");

  let cardNumber = document.getElementsByClassName("number"); //number top es [0] y inferior [1]

  let centerSymbol = document.querySelector(".center"); // simbolos del centro

  let otherSymbol = document.querySelector(".symbol-top"); // simbolos del header

  let otherSymbol2 = document.querySelector(".symbol-botom"); // simbolos del footer

  let changeCard = document.getElementById("button-change");

  let arrayCards = ["♦", "♥", "♠", "♣"];

  changeCard.addEventListener("click", function() {
    let symbolNum = Math.floor(Math.random() * 4);
    centerSymbol.innerHTML = arrayCards[symbolNum];
    otherSymbol.innerHTML = arrayCards[symbolNum];
    otherSymbol2.innerHTML = arrayCards[symbolNum];
  });
};
