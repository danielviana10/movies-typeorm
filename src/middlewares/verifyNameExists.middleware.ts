import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name } = res.locals.foundMovie;
    const movieName = req.body.name

    if(name == movieName){
        throw new AppError("Movie already exists.", 409)
    };

    return next();
}