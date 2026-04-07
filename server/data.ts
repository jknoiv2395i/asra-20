import fs from "fs";
import path from "path";
import { Property } from "@shared/schema";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "properties.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

export function readProperties(): Property[] {
  ensureDataDir();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Property[];
}

export function writeProperties(properties: Property[]): void {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(properties, null, 2), "utf-8");
}

export function findProperty(id: string): Property | undefined {
  const properties = readProperties();
  return properties.find((p) => p.id === id);
}

export function addProperty(property: Property): Property {
  const properties = readProperties();
  properties.push(property);
  writeProperties(properties);
  return property;
}

export function updateProperty(
  id: string,
  updates: Partial<Property>,
): Property | null {
  const properties = readProperties();
  const index = properties.findIndex((p) => p.id === id);
  if (index === -1) return null;
  properties[index] = { ...properties[index], ...updates, updatedAt: new Date().toISOString() };
  writeProperties(properties);
  return properties[index];
}

export function deleteProperty(id: string): boolean {
  const properties = readProperties();
  const index = properties.findIndex((p) => p.id === id);
  if (index === -1) return false;
  properties.splice(index, 1);
  writeProperties(properties);
  return true;
}
