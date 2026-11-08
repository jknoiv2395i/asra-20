import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { readProperties, findProperty, addProperty, updateProperty, deleteProperty } from "../data";
import { verifyAdmin } from "../middleware/auth";
import { Property, PropertyInput } from "@shared/schema";

const router = Router();

// GET /api/properties — Public: list all (with optional filters)
router.get("/", (req, res) => {
  const properties = readProperties();
  const { type, featured } = req.query;

  let filtered = [...properties];

  if (type && type !== "all") {
    filtered = filtered.filter((p) => p.type === type);
  }

  if (featured === "true") {
    filtered = filtered.filter((p) => p.featured);
  }

  // Sort by createdAt descending (newest first)
  filtered.sort(
    (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime(),
  );

  res.json({ success: true, data: filtered });
});

// GET /api/properties/:id — Public: get single property
router.get("/:id", (req, res) => {
  const property = findProperty(req.params.id);
  if (!property) {
    res.status(404).json({ success: false, error: "Property not found" });
    return;
  }
  res.json({ success: true, data: property });
});

// POST /api/properties — Admin: create property
router.post("/", verifyAdmin, (req, res) => {
  const input: PropertyInput = req.body;

  if (!input || !input.title || !input.location) {
    res
      .status(400)
      .json({ success: false, error: "Missing required fields: title and location are required." });
    return;
  }

  const now = new Date().toISOString();
  const property: Property = {
    id: `prop-${uuidv4().slice(0, 8)}`,
    title: String(input.title).trim(),
    location: String(input.location).trim(),
    price: input.price ? String(input.price).trim() : "Contact for Price",
    type: (input.type as any) || "residential",
    beds: input.beds != null && !isNaN(Number(input.beds)) ? Number(input.beds) : undefined,
    baths: input.baths != null && !isNaN(Number(input.baths)) ? Number(input.baths) : undefined,
    area: input.area ? String(input.area).trim() : "On Request",
    tag: input.tag ? String(input.tag).trim() : undefined,
    description: input.description ? String(input.description).trim() : undefined,
    images: Array.isArray(input.images) ? input.images.filter(Boolean) : [],
    videos: Array.isArray(input.videos) ? input.videos.filter(Boolean) : [],
    featured: Boolean(input.featured),
    createdAt: now,
    updatedAt: now,
  };

  const created = addProperty(property);
  res.status(201).json({ success: true, data: created });
});

// PUT /api/properties/:id — Admin: update property
router.put("/:id", verifyAdmin, (req, res) => {
  const input: Partial<PropertyInput> = req.body;
  if (!input) {
    res.status(400).json({ success: false, error: "No update data provided." });
    return;
  }

  const updates: Partial<Property> = {};
  if (input.title !== undefined) updates.title = String(input.title).trim();
  if (input.location !== undefined) updates.location = String(input.location).trim();
  if (input.price !== undefined) updates.price = String(input.price).trim();
  if (input.type !== undefined) updates.type = input.type;
  if (input.area !== undefined) updates.area = String(input.area).trim();
  if (input.tag !== undefined) updates.tag = String(input.tag).trim();
  if (input.description !== undefined) updates.description = String(input.description).trim();
  if (input.images !== undefined) updates.images = Array.isArray(input.images) ? input.images.filter(Boolean) : [];
  if (input.videos !== undefined) updates.videos = Array.isArray(input.videos) ? input.videos.filter(Boolean) : [];
  if (input.featured !== undefined) updates.featured = Boolean(input.featured);
  
  if (input.beds !== undefined) {
    updates.beds = input.beds != null && !isNaN(Number(input.beds)) ? Number(input.beds) : undefined;
  }
  if (input.baths !== undefined) {
    updates.baths = input.baths != null && !isNaN(Number(input.baths)) ? Number(input.baths) : undefined;
  }

  const updated = updateProperty(req.params.id, updates);
  if (!updated) {
    res.status(404).json({ success: false, error: "Property not found" });
    return;
  }
  res.json({ success: true, data: updated });
});

// DELETE /api/properties/:id — Admin: delete property
router.delete("/:id", verifyAdmin, (req, res) => {
  const deleted = deleteProperty(req.params.id);
  if (!deleted) {
    res.status(404).json({ success: false, error: "Property not found" });
    return;
  }
  res.json({ success: true, data: { message: "Property deleted" } });
});

export default router;
