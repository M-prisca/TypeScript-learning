"use strict";
function renders(document) {
    if (isMoveable(document)) {
        document.move();
    }
    if (isFlyable(document)) {
        document.fly();
    }
}
function isMoveable(doc) {
    return (typeof doc === "object" &&
        doc !== null &&
        "move" in doc &&
        typeof doc.move === "function");
}
function isFlyable(doc) {
    return (typeof doc === "object" &&
        doc !== null &&
        "fly" in doc &&
        typeof doc.fly === "function");
}
//# sourceMappingURL=unknownInInterface.js.map