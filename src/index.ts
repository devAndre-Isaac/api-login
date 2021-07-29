import "reflect-metadata";

import { connection } from "./database";
import express from "express";
import routes from "./routes";

async function tests() {
  await connection();
  const app = express();
  app.use(express.json());
  app.use(routes);

  app.listen(5555, () => {
    console.log("Application running on port 5555");
  });
}
tests();
