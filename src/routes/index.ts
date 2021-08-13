import { Router } from "express";
import bussinesRouter from "./bussines.routes";
import userRouter from "./user.routes";
import academicRouter from "./academic.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/bussines", bussinesRouter);
routes.use("/academic", academicRouter);

export default routes;
