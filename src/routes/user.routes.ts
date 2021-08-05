import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";

import * as validation from "../validation/userValidator";
import * as controllers from "../controllers/user";
import { getValidData } from "../validation/validatorHandle";

const userRouter = Router();

userRouter.get("/", async (request, response) => {
  const usersGet = await controllers.getAllUsers();
  return response.status(200).json(usersGet);
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
    const { params } = getValidData(request);
    const userUpdate = await controllers.updateUserById(
      params.id,
      request.body
    );

    return response.status(200).json(userUpdate);
  }
);

export default userRouter;
