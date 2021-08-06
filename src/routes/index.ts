import { Router } from "express";
import bussinesRouter from "./bussines.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/bussines", bussinesRouter);

export default routes;
