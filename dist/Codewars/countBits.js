"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBits = countBits;
function countBits(n) {
    return n.toString(2).split('').filter(bit => bit === '1').length;
}
//# sourceMappingURL=countBits.js.map