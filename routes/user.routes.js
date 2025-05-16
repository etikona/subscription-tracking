import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "Get all users" }));
userRouter.get("/:id", (req, res) => res.send({ title: "Get a single user" }));
userRouter.post("/", (req, res) => res.send({ title: "Set all users" }));
userRouter.put("/", (req, res) => res.send({ title: "Update all users" }));
userRouter.delete("/", (req, res) => res.send({ title: "Delete all users" }));

export default userRouter;
