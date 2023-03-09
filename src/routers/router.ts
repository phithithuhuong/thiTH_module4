import {studentRouter} from "./student.router";

const router = (app)=>{
    app.use('/',studentRouter)
};
export default router