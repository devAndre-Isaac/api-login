import { Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { createCompanyValidator } from "../validation/companyValidation";

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
    return response.status(201).json({ message: "OK" });
  }
);

export default userRouter;
