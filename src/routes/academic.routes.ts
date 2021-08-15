import { Router } from "express";
import { validationResult } from "express-validator";
import { getRepository } from "typeorm";
import * as controllers from "../controllers/academic";
import { Academic } from "../entity/academic";

const academicRouter = Router();

academicRouter.get("/", async (request, response) => {
  const repository = getRepository(Academic)
  const academicToRead = await repository.find()
  return response.json(academicToRead);
});

academicRouter.post("/createAcademic", async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  const academic = await controllers.create(request.body);
  return response.status(201).json(academic);
});

export default academicRouter;
