import { Router } from "express";
import { validationResult } from "express-validator";
import * as controllers from "../controllers/academic";

const academicRouter = Router();

academicRouter.get("/", async (request, response) => {
  return response.json({ message: "Ok" });
});

academicRouter.post("/", async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  const academic = await controllers.create(request.body);
  return response.status(201).json(academic);
});

export default academicRouter;
