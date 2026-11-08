import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { verifyAdmin } from "../middleware/auth";

const router = Router();

// Ensure uploads directory exists
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueName = `${uuidv4()}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB max per file
  },
  fileFilter: (_req, file, cb) => {
    const allowedImageTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    const allowedVideoTypes = ["video/mp4", "video/webm", "video/quicktime"];
    const allowed = [...allowedImageTypes, ...allowedVideoTypes];

    if (allowed.includes(file.mimetype.toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error(`File type not supported: ${file.mimetype}. Allowed: JPEG, PNG, WebP, MP4.`));
    }
  },
});

// POST /api/upload — Admin: upload multiple files
router.post(
  "/",
  verifyAdmin,
  (req, res, next) => {
    upload.array("files", 20)(req, res, (err: any) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          res.status(400).json({ success: false, error: `Upload error: ${err.message}` });
          return;
        }
        res.status(400).json({ success: false, error: err.message || "Failed to upload files" });
        return;
      }
      next();
    });
  },
  (req, res) => {
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      res.status(400).json({ success: false, error: "No files uploaded" });
      return;
    }

    const urls = files.map((f) => `/uploads/${f.filename}`);

    res.json({
      success: true,
      data: {
        urls,
        count: files.length,
      },
    });
  }
);

// DELETE /api/upload/:filename — Admin: delete a file
router.delete("/:filename", verifyAdmin, (req, res) => {
  const filename = path.basename(req.params.filename);
  const filePath = path.join(UPLOADS_DIR, filename);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ success: false, error: "File not found" });
    return;
  }

  try {
    fs.unlinkSync(filePath);
    res.json({ success: true, data: { message: "File deleted" } });
  } catch (err: any) {
    res.status(500).json({ success: false, error: "Could not delete file" });
  }
});

export default router;
