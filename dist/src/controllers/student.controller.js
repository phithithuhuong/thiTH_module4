"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_schema_1 = require("../schemas/student.schema");
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
class StudentControllers {
    constructor() {
    }
    create(req, res) {
        res.render('create');
    }
    ;
    async createPost(req, res) {
        try {
            let pointLT = Number(req.body.pointLT);
            let pointTH = Number(req.body.pointTH);
            let avg = (pointLT + pointTH) / 2;
            let values = {
                name: req.body.name,
                code: req.body.code,
                pointLT: req.body.pointLT,
                pointTH: req.body.pointTH,
                description: req.body.description,
                evaluates: req.body.evaluates,
                class: req.body.class,
                avg: avg,
            };
            let studentNew = new student_schema_1.Student(values);
            let student = await studentNew.save();
            if (student) {
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
            let student = await student_schema_1.Student.find();
            res.render('list', { student: student });
        }
        catch (err) {
            console.log('Err list' + err.message);
        }
    }
    async search(req, res) {
        try {
            console.log(req.body.search);
            const regex = new RegExp(escapeRegex(req.body.search), 'gi');
            let student = await student_schema_1.Student.find({ "name": regex });
            res.render('list', { student: student });
        }
        catch (err) {
            console.log('Err list' + err.message);
        }
    }
    async leaderboard(req, res) {
        try {
            let student = await student_schema_1.Student.find().sort({ avg: -1 });
            res.render('leaderboard', { student: student });
        }
        catch (err) {
            console.log('Err leaderboard' + err.message);
        }
    }
    async listPost(req, res) {
        try {
            let id = req.params.id;
            let student = await student_schema_1.Student.findById(id);
            res.render('detail', { student: student });
        }
        catch (err) {
            console.log('err detail : ', err.message);
        }
    }
    async delete(req, res) {
        try {
            let id = req.params.id;
            await student_schema_1.Student.findByIdAndDelete(id);
            res.redirect('/list');
        }
        catch (err) {
            console.log('Err delete :', err.message);
        }
    }
    async update(req, res) {
        try {
            let id = req.params.id;
            let student = await student_schema_1.Student.findById(id);
            res.render('update', { student: student });
        }
        catch (err) {
            console.log('Err update :', err.message);
        }
    }
    async updatePost(req, res) {
        try {
            let id = req.params.id;
            await student_schema_1.Student.findByIdAndUpdate({ _id: id }, { $set: req.body });
            res.redirect('/list');
        }
        catch (err) {
            console.log('err update:', err.message);
        }
    }
    async c09(req, res) {
        try {
            let student = await student_schema_1.Student.find({ class: 'C0922G1' });
            res.render('list', { student: student });
        }
        catch (err) {
            console.log('Err list' + err.message);
        }
    }
    async c10(req, res) {
        try {
            let student = await student_schema_1.Student.find({ class: 'C1022I1' });
            res.render('list', { student: student });
        }
        catch (err) {
            console.log('Err list' + err.message);
        }
    }
}
exports.default = new StudentControllers();
//# sourceMappingURL=student.controller.js.map