// using typeof

const button = document.querySelector ('.button');
const firstInput = document.querySelector ('#firstInput');
const secondInput = document.querySelector ('#secondInput');
const screen = document.querySelector ('.screen');

function addNumbers(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
    screen.innerHTML= a + b
    }else screen.innerHTML = parseInt(a) + parseInt(b)
}

button.addEventListener('click', ()=> addNumbers(firstInput.value, secondInput.value));
  