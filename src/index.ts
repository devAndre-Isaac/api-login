import express from "express";
const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Running" });
});

app.listen(5555, () => {
  console.log("aplicação rodando na porta 5555");
});
