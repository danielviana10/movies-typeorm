import { Request, Response } from "express";
import { Movie } from "../entities";
import { moviesServices } from "../services";
import { Pagination } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const movie: Movie = await moviesServices.create(req.body)

    return res.status(201).json(movie)
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const { pagination } = res.locals
    const movies: Pagination = await moviesServices.read(pagination)

    return res.status(200).json(movies)
};

const partialUpdate = async (req: Request, res: Response): Promise<Response> => {
    const { foundMovie } = res.locals;
    const updateMovie = req.body;

    const movie: Movie = await moviesServices.partialUpdate(foundMovie, updateMovie)

    return res.status(200).json(movie)
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await moviesServices.destroy(res.locals.foundMovie)

    return res.status(204).json()
};

export default { create, read, partialUpdate, destroy };