"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./src/routers/router"));
const PORT = 3000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
const DB_URL = 'mongodb://127.0.0.1:27017/thi_md4';
mongoose_1.default.connect(DB_URL).then(() => {
    console.log("Connect DB success");
}).catch(err => {
    console.log(err.message);
});
app.use(body_parser_1.default.json());
(0, router_1.default)(app);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map