const  colors = ['red', 'green', 'blue', 'yellow', '#b95602', 'rgba(123,45,98,0.6)', 'salmon', 'crimson'];

let btn = document.getElementById('btn');
let color = document.querySelector('.color');
let main = document.querySelector('main');

btn.addEventListener('click', function (){
    let randomNumber = getRandomNumber();
    main.style.background = colors[randomNumber];
    color.style.color = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}