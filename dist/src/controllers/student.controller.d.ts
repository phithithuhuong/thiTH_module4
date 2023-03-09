import { Request, Response } from "express";
declare class StudentControllers {
    constructor();
    create(req: Request, res: Response): void;
    createPost(req: Request, res: Response): Promise<void>;
    list(req: Request, res: Response): Promise<void>;
    search(req: Request, res: Response): Promise<void>;
    leaderboard(req: Request, res: Response): Promise<void>;
    listPost(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    updatePost(req: Request, res: Response): Promise<void>;
    c09(req: Request, res: Response): Promise<void>;
    c10(req: Request, res: Response): Promise<void>;
}
declare const _default: StudentControllers;
export default _default;
