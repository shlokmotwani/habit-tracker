import dotenv from "dotenv";
import express from "express";
import { authRouter } from "./routers/authRouter.js";
import { userRouter } from "./routers/userRouter.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server started. Listening to port:${PORT}`);
});
