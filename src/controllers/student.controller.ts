// kiểm soát root và xử lí
import {Request, Response} from "express";
import {Student} from "../schemas/student.schema";
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

class StudentControllers {
    constructor() {
    }

    create(req: Request, res: Response) {
        res.render('create')
    };

    async createPost(req: Request, res: Response) {
        try {
            let pointLT = Number( req.body.pointLT)
            let pointTH =Number( req.body.pointTH)
            let avg = (pointLT+pointTH)/2
            let values = {
                name: req.body.name,
                code: req.body.code,
                pointLT: req.body.pointLT,
                pointTH: req.body.pointTH,
                description: req.body.description,
                evaluates: req.body.evaluates,
                class: req.body.class,
                avg:avg ,
            };
            let studentNew = new Student(values);
            let student = await studentNew.save();
            if (student) {
                res.redirect('/list')
            } else {
                console.log("Err create")
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    async list(req: Request, res: Response) {
        try {
            let student = await Student.find();
            res.render('list', {student: student})


        } catch (err) {
            console.log('Err list' + err.message)
        }
    }
    async search(req: Request, res: Response) {
        try {
            console.log(req.body.search)
            const regex = new RegExp(escapeRegex(req.body.search), 'gi');
            let student = await Student.find({"name" : regex});
            res.render('list', {student: student})
        } catch (err) {
            console.log('Err list' + err.message)
        }
    }
    async leaderboard(req: Request, res: Response) {
        try {
            let student = await Student.find().sort({avg:-1})
            res.render('leaderboard', {student: student})

        } catch (err) {
            console.log('Err leaderboard' + err.message)
        }
    }

    async listPost(req: Request, res: Response) {
        try {
            let id = req.params.id;
            let student = await Student.findById(id);
            res.render('detail', {student: student})

        } catch (err) {
            console.log('err detail : ', err.message)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            let id = req.params.id;
            await Student.findByIdAndDelete(id);
            res.redirect('/list')
        } catch (err) {
            console.log('Err delete :', err.message)
        }
    }

    async update(req: Request, res: Response) {
        try {
            let id = req.params.id;
            let student = await Student.findById(id);
            res.render('update', {student: student})

        } catch (err) {
            console.log('Err update :', err.message)
        }
    }

    async updatePost(req: Request, res: Response) {
        try {
            let id = req.params.id;
            await Student.findByIdAndUpdate({_id: id}, {$set: req.body})
            res.redirect('/list')
        } catch (err) {
            console.log('err update:', err.message)
        }

    }
    async c09(req: Request, res: Response) {
        try {
            let student = await Student.find({class :'C0922G1'});
            res.render('list', {student: student})
        } catch (err) {
            console.log('Err list' + err.message)
        }
    }
    async c10(req: Request, res: Response) {
        try {
            let student = await Student.find({class :'C1022I1'});
            res.render('list', {student: student})
        } catch (err) {
            console.log('Err list' + err.message)
        }
    }

}

export default new StudentControllers();
