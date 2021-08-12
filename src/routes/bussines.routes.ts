import { Request, Response, Router } from "express";
import { header, param, validationResult } from "express-validator";

import * as validation from "../validation/bussinesValidator";
import * as controllers from "../controllers/bussines";
import { getValidData } from "../validation/validatorHandle";

const bussinesRouter = Router();

bussinesRouter.get("/", async (request, response) => {
  const bussinesGet = await controllers.getAllBussines();
  return response.status(200).json(bussinesGet);
});

bussinesRouter.post(
  "/createBussines",
  validation.createBussinesValidator,
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const bussines = await controllers.create(request.body);
    return response.status(201).json(bussines);
  }
);

bussinesRouter.put(
  "/:id",
  validation.updateBussinesValidator,
  async (request: Request, response: Response) => {
    const { params } = getValidData(request);
    const bussinesUpdate = await controllers.updateBussinesById(
      params.id,
      request.body,
    );

    return response.status(200).json(bussinesUpdate);
  }
);

bussinesRouter.delete(
  "/:id",
  validation.idValidator,
  async (request: Request, response: Response) => {
    const { params } = getValidData(request);
    const bussinesDelete = await controllers.remove(params.id);

    return response.status(204).json(bussinesDelete);
  }
);

export default bussinesRouter;
