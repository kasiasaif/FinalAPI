const { Router } = require("express");
const { addUser, 
    logIn,
    findOne,
    findAll,
    updateEmail,
    updatePassword,
    deleteUser 
} = require("./user.controllers");
const { hashing, tokenCheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashing, addUser);
userRouter.post("/login", logIn);
userRouter.get("/user", tokenCheck, logIn);
userRouter.get("/user/:username", findOne);
userRouter.get("/users", findAll);
userRouter.put("/user", updateEmail);
userRouter.put("/user",updatePassword);
userRouter.delete("/user/delete", deleteUser);


module.exports = userRouter;

