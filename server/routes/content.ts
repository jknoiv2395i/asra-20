import { Router } from "express";
import { readContent, writeContent } from "../content";
import { verifyAdmin } from "../middleware/auth";
import { SiteContent } from "@shared/schema";

const router = Router();

// Public: Get current site content
router.get("/", (req, res) => {
  try {
    const content = readContent();
    res.json({ success: true, data: content });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to read content" });
  }
});

// Protected: Update site content
router.put("/", verifyAdmin, (req, res) => {
  try {
    const newContent: SiteContent = req.body;
    writeContent(newContent);
    res.json({ success: true, data: newContent });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to update content" });
  }
});

export default router;
