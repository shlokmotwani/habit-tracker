import express from "express";
import { signUp } from "../controllers/authController.js";
import { validateSignUpForm } from "../controllers/fromController.js";

const authRouter = express.Router();

authRouter.post("/sign-up", validateSignUpForm, signUp);

authRouter.post("/login", (req, res) => {
    res.send("Reached POST /auth/login");
  });

export { authRouter };
