import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { getRepository } from "typeorm";
import { User } from "../entity/user";
import { createCompanyValidator } from "../validation/userValidator";

const userRouter = Router();

userRouter.get("/", (request, response) => {
  return response.json({ message: "Ok" });
});

userRouter.post(
  "/userCreate",
  createCompanyValidator,
  (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    return response.status(201).json(request.body);
  }
);

userRouter.post("/testCreate", async (req, res) => {
  const repository = getRepository(User);
  const user = repository.create(req.body);
  await repository.save(user);
  return res.status(201).json(user);
});

export default userRouter;
