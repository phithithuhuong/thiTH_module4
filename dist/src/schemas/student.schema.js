"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
;
const StudentSchema = new mongoose_1.Schema({
    name: String,
    code: String,
    pointLT: Number,
    pointTH: Number,
    description: String,
    evaluates: String,
    class: String,
    avg: Number
});
const Student = (0, mongoose_1.model)('Student', StudentSchema);
exports.Student = Student;
//# sourceMappingURL=student.schema.js.map