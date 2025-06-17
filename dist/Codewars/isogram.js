"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsogram = isIsogram;
function isIsogram(str) {
    const lowerStr = str.toLowerCase();
    const seen = new Set();
    for (const char of lowerStr) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}
//# sourceMappingURL=isogram.js.map