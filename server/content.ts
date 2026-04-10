import fs from "fs";
import path from "path";
import { SiteContent, defaultContent } from "@shared/schema";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "content.json");

function ensureContentFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(CONTENT_FILE)) {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(defaultContent, null, 2), "utf-8");
  }
}

export function readContent(): SiteContent {
  ensureContentFile();
  try {
    const raw = fs.readFileSync(CONTENT_FILE, "utf-8");
    return JSON.parse(raw) as SiteContent;
  } catch (err) {
    console.error("Error reading content.json:", err);
    return defaultContent;
  }
}

export function writeContent(content: SiteContent): void {
  ensureContentFile();
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");
}
