import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (request, response) => {
  return response.json({ message: "Funcionando PORRAAAA" });
});

export default userRouter;
