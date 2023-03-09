"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_schema_1 = require("../schemas/car.schema");
class CarControllers {
    constructor() {
    }
    create(req, res) {
        res.render('create');
    }
    ;
    async createPost(req, res) {
        try {
            let values = req.body;
            let carNew = new car_schema_1.Car(values);
            let car = await carNew.save();
            console.log(car);
            if (car) {
                res.redirect('/list');
            }
            else {
                console.log("Err create");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    async list(req, res) {
        try {
            let car = await car_schema_1.Car.find();
            res.render('list', { car: car });
        }
        catch (err) {
            console.log('Err list' + err.message);
        }
    }
    async listPost(req, res) {
        try {
            let id = req.params.id;
            let car = await car_schema_1.Car.findById(id);
            res.render('detail', { car: car });
        }
        catch (err) {
            console.log('err detail : ', err.message);
        }
    }
    async delete(req, res) {
        try {
            let id = req.params.id;
            await car_schema_1.Car.findByIdAndDelete(id);
            res.redirect('/list');
        }
        catch (err) {
            console.log('Err delete :', err.message);
        }
    }
    async update(req, res) {
        try {
            let id = req.params.id;
            let car = await car_schema_1.Car.findById(id);
            console.log(car, 1);
            res.render('update', { car: car });
        }
        catch (err) {
            console.log('Err update :', err.message);
        }
    }
    async updatePost(req, res) {
        try {
            let id = req.params.id;
            console.log(req.body);
            await car_schema_1.Car.findByIdAndUpdate({ _id: id }, { $set: req.body });
            res.redirect('/list');
        }
        catch (err) {
            console.log('err update:', err.message);
        }
    }
}
exports.default = new CarControllers();
//# sourceMappingURL=car.controller.js.map