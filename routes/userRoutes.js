const express = require("express");
const { model } = require("mongoose");
const { signup, signin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
module.exports = userRouter;