import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the subscription tracking api");
});

app.listen(3000, () => {
  console.log("Subscription API Running on 3000");
});
