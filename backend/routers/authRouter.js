import express from "express";
import { login, signUp } from "../controllers/authController.js";
import { validateSignUpForm } from "../controllers/fromController.js";

const authRouter = express.Router();

authRouter.post("/sign-up", validateSignUpForm, signUp);

authRouter.post("/login", login);

export { authRouter };
