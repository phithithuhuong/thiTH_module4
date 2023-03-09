"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = __importDefault(require("../controllers/student.controller"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
exports.studentRouter = express_1.default.Router();
exports.studentRouter.get('/create', student_controller_1.default.create);
exports.studentRouter.post('/create', upload.none(), student_controller_1.default.createPost);
exports.studentRouter.get('/list', student_controller_1.default.list);
exports.studentRouter.get('/leaderboard', student_controller_1.default.leaderboard);
exports.studentRouter.get('/list/:id', student_controller_1.default.listPost);
exports.studentRouter.post('/search', upload.none(), student_controller_1.default.search);
exports.studentRouter.get('/delete/:id', student_controller_1.default.delete);
exports.studentRouter.get('/update/:id', student_controller_1.default.update);
exports.studentRouter.post('/update/:id', upload.none(), student_controller_1.default.updatePost);
exports.studentRouter.get('/c09', student_controller_1.default.c09);
exports.studentRouter.get('/c10', student_controller_1.default.c10);
//# sourceMappingURL=student.router.js.map