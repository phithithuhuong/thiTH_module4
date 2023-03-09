"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
;
const CarSchema = new mongoose_1.Schema({
    name: String,
    code: String,
    price: Number,
    type: String,
    quantity: Number,
});
const Car = (0, mongoose_1.model)('Car', CarSchema);
exports.Car = Car;
//# sourceMappingURL=car.schema.js.map