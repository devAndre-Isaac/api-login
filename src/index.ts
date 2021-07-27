import express from "express";
import routes from "./routes";
import "reflect-metadata";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(5555, () => {
  console.log("Application running on port 5555");
});
