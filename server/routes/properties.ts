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

  let filtered = properties;

  if (type && type !== "all") {
    filtered = filtered.filter((p) => p.type === type);
  }

  if (featured === "true") {
    filtered = filtered.filter((p) => p.featured);
  }

  // Sort by createdAt descending (newest first)
  filtered.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
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

  if (!input.title || !input.location || !input.price || !input.type || !input.area) {
    res
      .status(400)
      .json({ success: false, error: "Missing required fields: title, location, price, type, area" });
    return;
  }

  const now = new Date().toISOString();
  const property: Property = {
    id: uuidv4(),
    title: input.title,
    location: input.location,
    price: input.price,
    type: input.type,
    beds: input.beds,
    baths: input.baths,
    area: input.area,
    tag: input.tag,
    description: input.description,
    images: input.images || [],
    videos: input.videos || [],
    featured: input.featured || false,
    createdAt: now,
    updatedAt: now,
  };

  addProperty(property);
  res.status(201).json({ success: true, data: property });
});

// PUT /api/properties/:id — Admin: update property
router.put("/:id", verifyAdmin, (req, res) => {
  const updated = updateProperty(req.params.id, req.body);
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
