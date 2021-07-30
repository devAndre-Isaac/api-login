import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";

import { createCompanyValidator } from "../validation/userValidator";
import * as controllers from "../controllers/user";

const userRouter = Router();

userRouter.get("/", (request, response) => {
  return response.json({ message: "Ok" });
});

userRouter.post(
  "/userCreate",
  createCompanyValidator,
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const user = await controllers.create(request.body);
    return response.status(201).json(user);
  }
);

export default userRouter;
