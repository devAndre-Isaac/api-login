import { request, Request, Response, Router } from "express";
import { validationResult } from "express-validator";

import * as validation from "../validation/userValidator";
import * as controllers from "../controllers/user";

const userRouter = Router();

userRouter.get("/", (request, response) => {
  return response.json({ message: "Ok" });
});

userRouter.post(
  "/createUser",
  validation.createUserValidator,
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const user = await controllers.create(request.body);
    return response.status(201).json(user);
  }
);

userRouter.put(
  "/:id",
  validation.updateUserValidator,
  async (request: Request, response: Response) => {
    return response.status(200).json({ message: "Updated User" });
  }
);

export default userRouter;
