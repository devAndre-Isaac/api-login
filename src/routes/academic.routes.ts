import { request, Request, response, Response, Router } from "express";
import { validationResult } from "express-validator";

const academicRouter = Router();

academicRouter.get("/", async (request, response) => {
  return response.json({ message: "Exquece" });
});

export default academicRouter;
