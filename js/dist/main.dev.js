"use strict";

var colors = ['red', 'green', 'blue', 'yellow', '#b95602', 'rgba(123,45,98,0.6)', 'salmon', 'crimson'];
var btn = document.getElementById('btn');
var color = document.querySelector('.color');
var main = document.querySelector('main');
btn.addEventListener('click', function () {
  var randomNumber = getRandomNumber();
  main.style.background = colors[randomNumber];
  color.style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}