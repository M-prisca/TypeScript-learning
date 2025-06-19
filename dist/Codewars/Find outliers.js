"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOutlier = findOutlier;
function findOutlier(integers) {
    const sample = integers.slice(0, 3);
    const evenCount = sample.filter(n => n % 2 === 0).length;
    const isMajorityEven = evenCount >= 2;
    return integers.find(n => (n % 2 === 0) !== isMajorityEven);
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
//# sourceMappingURL=Find%20outliers.js.map