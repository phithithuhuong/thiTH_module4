"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_router_1 = require("./student.router");
const router = (app) => {
    app.use('/', student_router_1.studentRouter);
};
exports.default = router;
//# sourceMappingURL=router.js.map