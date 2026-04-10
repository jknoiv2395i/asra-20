import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { handleDemo } from "./routes/demo";
import { handleLogin } from "./routes/auth";
import propertiesRouter from "./routes/properties";
import uploadRouter from "./routes/upload";
import contentRouter from "./routes/content";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve uploaded files statically
  app.use("/uploads", express.static(path.join(process.cwd(), "public", "uploads")));

  // Public API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app.get("/api/demo", handleDemo);

  // Auth routes
  app.post("/api/admin/login", handleLogin);

  // Property CRUD routes
  app.use("/api/properties", propertiesRouter);

  // Upload routes
  app.use("/api/upload", uploadRouter);

  // Site Content CMS Routes
  app.use("/api/content", contentRouter);

  return app;
}
