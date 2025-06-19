"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinWords = spinWords;
function spinWords(words) {
    return words
        .split(" ")
        .map(word => word.length >= 5 ? word.split("").reverse().join("") : word)
        .join(" ");
}
console.log(spinWords("i'm prisca masereli uwera "));
//# sourceMappingURL=spinWord.js.map