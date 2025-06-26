"use strict";
const sendMessage = (message) => {
    var _a;
    return (_a = message.text) === null || _a === void 0 ? void 0 : _a.toUpperCase();
};
sendMessage({ to: 'Alice' });
