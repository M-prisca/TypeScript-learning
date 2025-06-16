"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcType = calcType;
function calcType(a, b, res) {
    if (a + b === res)
        return 'addition';
    if (a - b === res)
        return 'subtraction';
    if (a * b === res)
        return 'multiplication';
    if (a / b === res)
        return 'division';
    throw new Error('Unknown operation');
}
//# sourceMappingURL=CalcType.js.map