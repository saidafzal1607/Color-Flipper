const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let button = document.getElementById('btn');
let mainBack = document.querySelector('main');
let result = document.querySelector('.color');

button.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[randomNumber()];
    }
    mainBack.style.background = hexColor;
    result.textContent = hexColor;
    result.style.color = hexColor;
})

function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}