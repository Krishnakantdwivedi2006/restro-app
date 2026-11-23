import express from "express";
import UserController from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("User route is working!");
});
userRouter.post("/register", UserController.registerUser);
userRouter.post("/login", UserController.loginUser);

export default userRouter;
