import {Schema,model} from "mongoose";
interface IStudent{
    name : string;
    code : string;
    pointLT : number;
    pointTH : number;
    description : string;
    evaluates : string;
    class : string,
    avg : number
};
const StudentSchema = new Schema<IStudent>({
    name : String,
    code : String,
    pointLT : Number,
    pointTH : Number,
    description : String,
    evaluates : String,
    class : String,
    avg : Number
});
const Student = model<IStudent>('Student', StudentSchema);
export {Student}