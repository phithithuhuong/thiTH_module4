import express from "express";
import studentController from "../controllers/student.controller";
import multer from "multer";
const upload =multer()
export const studentRouter = express.Router();
studentRouter.get('/create', studentController.create);
studentRouter.post('/create',upload.none() ,studentController.createPost);
studentRouter.get('/list' ,studentController.list);
studentRouter.get('/leaderboard' ,studentController.leaderboard);
studentRouter.get('/list/:id' ,studentController.listPost);
studentRouter.post('/search' ,upload.none(),studentController.search);
studentRouter.get('/delete/:id',studentController.delete)
studentRouter.get('/update/:id',studentController.update)
studentRouter.post('/update/:id',upload.none(),studentController.updatePost);
studentRouter.get('/c09' ,studentController.c09);
studentRouter.get('/c10' ,studentController.c10);
