import fs from "fs";
import path from "path";
import { Property } from "@shared/schema";
import { defaultPropertiesList } from "@shared/propertiesData";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "properties.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultPropertiesList, null, 2), "utf-8");
  }
}

export function readProperties(): Property[] {
  ensureDataDir();
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed as Property[];
    }
    // If parsed array is empty and file was fresh, return parsed or defaultPropertiesList
    if (Array.isArray(parsed)) {
      return parsed as Property[];
    }
  } catch (err) {
    console.error("Failed to read properties.json, fallback to defaults", err);
  }
  return [...defaultPropertiesList];
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
  properties.unshift(property);
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
