"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screen = void 0;
const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');
exports.screen = document.querySelector('.screen');
function addNumbers(a, b) {
    exports.screen.innerHTML = (a + b).toString();
}
button.addEventListener('click', () => addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)));
//# sourceMappingURL=index.js.map