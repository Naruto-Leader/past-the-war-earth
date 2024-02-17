"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_index_1 = __importDefault(require("serve-index"));
const app = (0, express_1.default)();
const maxAgePeriod = 1000 * 60 * 60 * 24 * 1;
app.use(express_1.default.static('public', {
    maxAge: maxAgePeriod
}));
app.use('/', (0, serve_index_1.default)('public'));
module.exports = app;
//# sourceMappingURL=app.js.map