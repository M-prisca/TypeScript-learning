// using typeof/

// const button = document.querySelector ('.button');
// const firstInput = document.querySelector ('#firstInput');
// const secondInput = document.querySelector ('#secondInput');
// const screen = document.querySelector ('.screen');

// function addNumbers(a,b){
//     if(typeof a === 'number' && typeof b === 'number'){
//     screen.innerHTML= a + b
//     }else screen.innerHTML = parseInt(a) + parseInt(b)
// }

// this will be implement after downloding the typeScrpit compiler

const button = document.querySelector('.button') as HTMLButtonElement
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const screen = document.querySelector('.screen') as HTMLElement
 
function addNumbers(a: number,b: number) {
     screen.innerHTML = (a + b).toString()
}
 
button.addEventListener('click', () => 
    addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))

// button.addEventListener('click', ()=> addNumbers(firstInput.value, secondInput.value));
  