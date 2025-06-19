"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
const likes = (a) => {
    const count = a.length;
    switch (count) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${a[0]} likes this`;
        case 2:
            return `${a[0]} and ${a[1]} like this`;
        case 3:
            return `${a[0]}, ${a[1]} and ${a[2]} like this`;
        default:
            return `${a[0]}, ${a[1]} and ${count - 2} others like this`;
    }
};
exports.likes = likes;
//# sourceMappingURL=Who%20likes%20it.js.map