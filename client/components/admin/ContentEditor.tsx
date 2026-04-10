import { useState, useEffect } from "react";
import { useContent } from "@/hooks/useContent";
import { SiteContent } from "@shared/schema";
import { motion } from "motion/react";
import { useToast } from "@/hooks/use-toast";

export default function ContentEditor() {
  const { content, updateContent, loading } = useContent();
  const { toast } = useToast();
  const [formData, setFormData] = useState<SiteContent | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (content) {
      setFormData(content);
    }
  }, [content]);

  if (loading || !formData) {
    return <div className="text-gray-400 py-10 text-center">Loading content...</div>;
  }

  const handleChange = (section: keyof SiteContent, field: string, value: string) => {
    setFormData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      };
    });
  };

  const handleSave = async () => {
    setSaving(true);
    const success = await updateContent(formData);
    setSaving(false);
    if (success) {
      toast({
        title: "Content Saved",
        description: "Your changes are now live on the website.",
      });
    } else {
      toast({
        title: "Error saving content",
        description: "There was a problem updating the website content.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 max-w-4xl max-h-[70vh] overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/90 backdrop-blur pb-4 border-b border-gray-100/50 z-10">
        <div>
          <h2 className="text-xl font-bold text-[#0E0840] font-instrument">Site Content</h2>
          <p className="text-sm text-gray-500">Edit the text that appears on your public pages</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-2 bg-[#0E0840] text-white rounded-xl text-sm font-semibold hover:bg-[#1a1060] transition disabled:opacity-50 flex items-center gap-2"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="space-y-10">
        {/* Contact Info */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Global Contact Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Phone Number</label>
              <input type="text" value={formData.contact.phone} onChange={(e) => handleChange("contact", "phone", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Email Address</label>
              <input type="text" value={formData.contact.email} onChange={(e) => handleChange("contact", "email", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-500 mb-1">Office Address</label>
              <textarea value={formData.contact.address} onChange={(e) => handleChange("contact", "address", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm h-16 resize-none" />
            </div>
            <div><label className="block text-xs font-medium text-gray-500 mb-1">Facebook URL</label><input type="text" value={formData.contact.facebook} onChange={(e) => handleChange("contact", "facebook", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" /></div>
            <div><label className="block text-xs font-medium text-gray-500 mb-1">Instagram URL</label><input type="text" value={formData.contact.instagram} onChange={(e) => handleChange("contact", "instagram", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" /></div>
          </div>
        </section>

        {/* Home Page */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Home Page
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Hero Title (Use \n for new line)</label>
              <textarea value={formData.home.heroTitle} onChange={(e) => handleChange("home", "heroTitle", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm h-16 font-instrument" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Hero Subtitle</label>
              <textarea value={formData.home.heroSubtitle} onChange={(e) => handleChange("home", "heroSubtitle", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm h-24" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Services Section Title</label>
              <input type="text" value={formData.home.servicesTitle} onChange={(e) => handleChange("home", "servicesTitle", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
            </div>
          </div>
        </section>

        {/* About Page */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            About Us Page
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Page Title</label>
              <input type="text" value={formData.about.title} onChange={(e) => handleChange("about", "title", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-instrument" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Our Mission Text</label>
              <textarea value={formData.about.mission} onChange={(e) => handleChange("about", "mission", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm h-24" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Our Vision Text</label>
              <textarea value={formData.about.vision} onChange={(e) => handleChange("about", "vision", e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm h-24" />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
