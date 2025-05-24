import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ title: "Set all users" }));
userRouter.put("/", (req, res) => res.send({ title: "Update all users" }));
userRouter.delete("/", (req, res) => res.send({ title: "Delete all users" }));

export default userRouter;
