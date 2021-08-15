import { Router } from "express";
import * as controllers from "../controllers/academic";

const academicRouter = Router();

academicRouter.get("/", async (request, response) => {
  return response.json({ message: "Ok" });
});

academicRouter.post("/", async (request, response) => {
  const academic = await controllers.create(request.body);
  return response.status(201).json(academic);
});

export default academicRouter;
