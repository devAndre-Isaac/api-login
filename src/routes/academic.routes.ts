import { request, Request, response, Response, Router } from "express";
import { validationResult } from "express-validator";
import { getRepository } from "typeorm";
import { Academic } from "../entity/academic";

const academicRouter = Router();

academicRouter.get("/", async (request, response) => {
  return response.json({ message: "Exquece" });
});

academicRouter.post("/", async (request, response) => {
  const repository = getRepository(Academic);
  const academicToSave = repository.create(request.body);
  const academic = await repository.save(academicToSave);

  return response.status(201).json(academic);
});

export default academicRouter;
