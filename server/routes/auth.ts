import { RequestHandler } from "express";
import { generateToken } from "../middleware/auth";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "asra2024";

export const handleLogin: RequestHandler = (req, res) => {
  const { password } = req.body;

  if (!password) {
    res.status(400).json({ success: false, error: "Password is required" });
    return;
  }

  if (password !== ADMIN_PASSWORD) {
    res.status(401).json({ success: false, error: "Invalid password" });
    return;
  }

  const token = generateToken();
  res.json({
    success: true,
    data: { token, message: "Login successful" },
  });
};
