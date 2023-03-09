"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRouter = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = __importDefault(require("../controllers/car.controller"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
exports.carRouter = express_1.default.Router();
exports.carRouter.get('/create', car_controller_1.default.create);
exports.carRouter.post('/create', upload.none(), car_controller_1.default.createPost);
exports.carRouter.get('/list', car_controller_1.default.list);
exports.carRouter.get('/list/:id', car_controller_1.default.listPost);
exports.carRouter.get('/delete/:id', car_controller_1.default.delete);
exports.carRouter.get('/update/:id', car_controller_1.default.update);
exports.carRouter.post('/update/:id', upload.none(), car_controller_1.default.updatePost);
//# sourceMappingURL=car.router.js.map