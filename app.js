import express from "express";
import { PORT } from "./config/env.js";
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the subscription tracking api");
});

app.listen(PORT, () => {
  console.log(`Subscription API Running on ${PORT}`);
});

export default app;
