import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscription,
} from "../controllers/subscription.controller.js";
const userRouter = Router();
const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all the subscription data" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get  a single the subscription data" })
);
subscriptionRouter.get("/user/:id", authorize, getUserSubscription);

subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.post("/:id", (req, res) =>
  res.send({ title: "Post a single the subscription data" })
);
subscriptionRouter.put("/", (req, res) =>
  res.send({ title: "Update all the subscription data" })
);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update a single the subscription data" })
);
subscriptionRouter.delete("/", (req, res) =>
  res.send({ title: "delete all the subscription data" })
);
subscriptionRouter.delete("/", (req, res) =>
  res.send({ title: "delete a single the subscription data" })
);

export default subscriptionRouter;
