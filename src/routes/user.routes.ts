import { request, response, Router } from "express";

const userRouter = Router();

userRouter.get("/", (request, response) => {
  return response.json({ message: "Ok" });
});

userRouter.post("/userCreate", (request, response) => {
  return response.status(201).json({ message: "OK" });
});

export default userRouter;
