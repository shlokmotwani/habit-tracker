import express from "express";
import {
  createUser,
  fetchUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/:email", authenticateToken, fetchUser);
userRouter.put("/:email", authenticateToken, updateUser);
userRouter.delete("/:email", authenticateToken, deleteUser);

export { userRouter };
