import { comparePasswords, hashPassword } from "../utils/encryption.js";
import { generateToken } from "../utils/jwt.js";
import { createUser, getUserByEmail } from "./userController.js";

async function signUp(req, res) {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = hashPassword(password);
    const user = { name, email, password: hashedPassword };
    const response = await createUser(user);
    res.status(200).json({ message: response.message });
  } catch (error) {
    res.status(500).json({ message: "Error during signing up", error });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const response = await getUserByEmail(email);

    if (!response.user) {
      return res.status(401).json(response.message);
    }
    const match = await comparePasswords(password, response.user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken({ email: response.user.email });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error during login", error });
  }
}

export { signUp, login };
