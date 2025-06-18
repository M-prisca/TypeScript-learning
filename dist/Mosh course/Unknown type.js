"use strict";
function render(document) {
    if (typeof document === "string") {
        console.log("It's a string", document.toLocaleUpperCase());
    }
    if (typeof document === "object" &&
        document !== null &&
        "move" in document &&
        typeof document.move === "function") {
        document.move();
    }
    if (typeof document === "object" &&
        document !== null && "fly" in document &&
        typeof document.fly === "function")
        document.fly();
}
//# sourceMappingURL=Unknown%20type.js.map