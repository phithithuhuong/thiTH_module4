import express, {Router} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"//khoong phai import cac file
// @ts-ignore
import multer from  "multer"
import mongoose from "mongoose";
import router from "./src/routers/router";
const PORT = 3000;
const app = express();
app.set('view engine','ejs');
app.set('views','src/views');
const DB_URL ='mongodb://127.0.0.1:27017/thi_md4';
mongoose.connect(DB_URL).then(()=>{
    console.log("Connect DB success")
}).catch(err=>{
    console.log(err.message)
});
app.use(bodyParser.json());
router(app);
app.listen(PORT, () => {
    console.log( `http://localhost:${PORT}` );
})