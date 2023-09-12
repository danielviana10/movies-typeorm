import { Router } from "express";
import { movieControllers } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";
import validateBody from "../middlewares/validateBody.middleware";

export const movieRouter: Router = Router()

movieRouter.post("", middlewares.validateBody(movieCreateSchema), middlewares.verifyToCreate, movieControllers.create)
movieRouter.get("", middlewares.pagination, movieControllers.read)

movieRouter.use("/:movieId", middlewares.verifyIdExists, middlewares.verifyNameExists)
movieRouter.patch("/:movieId", validateBody(movieUpdateSchema), movieControllers.partialUpdate)
movieRouter.delete("/:movieId", movieControllers.destroy)