const { Router } = require("express");
const { addUser, logIn } = require("./user.controllers");
const { hashing, tokenCheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashing, addUser);
userRouter.post("/login", logIn);
userRouter.get("/user", tokenCheck, logIn);

module.exports = userRouter;

