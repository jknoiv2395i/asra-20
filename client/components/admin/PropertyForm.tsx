import { useState, useEffect } from "react";
import { Property, PropertyInput } from "@shared/schema";
import MediaUploader from "./MediaUploader";

interface PropertyFormProps {
  property?: Property | null;
  onSubmit: (data: PropertyInput) => Promise<void>;
  onCancel: () => void;
}

export default function PropertyForm({ property, onSubmit, onCancel }: PropertyFormProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<PropertyInput>({
    title: "",
    location: "",
    price: "",
    type: "residential",
    beds: undefined,
    baths: undefined,
    area: "",
    tag: "",
    description: "",
    images: [],
    videos: [],
    featured: false,
  });

  useEffect(() => {
    if (property) {
      setForm({
        title: property.title,
        location: property.location,
        price: property.price,
        type: property.type,
        beds: property.beds,
        baths: property.baths,
        area: property.area,
        tag: property.tag || "",
        description: property.description || "",
        images: property.images || [],
        videos: property.videos || [],
        featured: property.featured,
      });
    }
  }, [property]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(form);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a96e] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/20 transition-all text-sm bg-white";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-h-[75vh] overflow-y-auto px-1">
      {/* Title */}
      <div>
        <label className={labelClass}>Property Title *</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="e.g., Forest Retreat Villa"
          className={inputClass}
          required
        />
      </div>

      {/* Location + Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Location *</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            placeholder="e.g., Super Corridor, Indore"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Price *</label>
          <input
            type="text"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="e.g., ₹45 Lakh"
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Type + Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Type *</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value as PropertyInput["type"] })}
            className={inputClass}
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Area *</label>
          <input
            type="text"
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            placeholder="e.g., 2,800 sq ft"
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Beds + Baths (only for residential) */}
      {form.type === "residential" && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Bedrooms</label>
            <input
              type="number"
              value={form.beds ?? ""}
              onChange={(e) => setForm({ ...form, beds: e.target.value ? Number(e.target.value) : undefined })}
              placeholder="e.g., 3"
              className={inputClass}
              min="0"
            />
          </div>
          <div>
            <label className={labelClass}>Bathrooms</label>
            <input
              type="number"
              value={form.baths ?? ""}
              onChange={(e) => setForm({ ...form, baths: e.target.value ? Number(e.target.value) : undefined })}
              placeholder="e.g., 2"
              className={inputClass}
              min="0"
            />
          </div>
        </div>
      )}

      {/* Tag + Featured */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Tag (optional)</label>
          <input
            type="text"
            value={form.tag || ""}
            onChange={(e) => setForm({ ...form, tag: e.target.value })}
            placeholder="e.g., Featured, New, Hot Deal"
            className={inputClass}
          />
        </div>
        <div className="flex items-end pb-1">
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              className={`relative w-11 h-6 rounded-full transition-colors ${form.featured ? "bg-[#c9a96e]" : "bg-gray-200"}`}
              onClick={() => setForm({ ...form, featured: !form.featured })}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${form.featured ? "translate-x-[22px]" : "translate-x-0.5"}`}
              />
            </div>
            <span className="text-sm text-gray-700 font-medium">Show on Homepage</span>
          </label>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Description</label>
        <textarea
          value={form.description || ""}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Detailed property description..."
          rows={4}
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Images upload */}
      <MediaUploader
        label="Images"
        accept="image/jpeg,image/png,image/webp,image/gif"
        files={form.images || []}
        onChange={(images) => setForm({ ...form, images })}
      />

      {/* Videos upload */}
      <MediaUploader
        label="Videos"
        accept="video/mp4,video/webm,video/quicktime"
        files={form.videos || []}
        onChange={(videos) => setForm({ ...form, videos })}
      />

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 sticky bottom-0 bg-white pb-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #0E0840, #1a1060)" }}
        >
          {loading ? "Saving..." : property ? "Update Property" : "Add Property"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 rounded-xl font-medium text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
