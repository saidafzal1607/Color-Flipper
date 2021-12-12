"use strict";

var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var button = document.getElementById('btn');
var mainBack = document.querySelector('main');
var result = document.querySelector('.color');
button.addEventListener('click', function () {
  var hexColor = '#';

  for (var i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }

  mainBack.style.background = hexColor;
  result.textContent = hexColor;
  result.style.color = hexColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}