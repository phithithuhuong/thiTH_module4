import { Request, Response } from "express";
declare class CarControllers {
    constructor();
    create(req: Request, res: Response): void;
    createPost(req: Request, res: Response): Promise<void>;
    list(req: Request, res: Response): Promise<void>;
    listPost(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    updatePost(req: Request, res: Response): Promise<void>;
}
declare const _default: CarControllers;
export default _default;
