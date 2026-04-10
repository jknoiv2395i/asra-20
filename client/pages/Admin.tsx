import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthFetch } from "@/hooks/useAuth";
import { Property, PropertyInput } from "@shared/schema";
import PropertyForm from "@/components/admin/PropertyForm";
import ContentEditor from "@/components/admin/ContentEditor";
import { motion, AnimatePresence } from "motion/react";

export default function Admin() {
  const { isAuthenticated, logout } = useAuth();
  const authFetch = useAuthFetch();
  const navigate = useNavigate();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const [activeTab, setActiveTab] = useState<"properties" | "content">("properties");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
      return;
    }
    fetchProperties();
  }, [isAuthenticated]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (data.success) setProperties(data.data);
    } catch (err) {
      console.error("Failed to fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (input: PropertyInput) => {
    const res = await authFetch("/api/properties", {
      method: "POST",
      body: JSON.stringify(input),
    });
    const data = await res.json();
    if (data.success) {
      setShowForm(false);
      fetchProperties();
    }
  };

  const handleEdit = async (input: PropertyInput) => {
    if (!editingProperty) return;
    const res = await authFetch(`/api/properties/${editingProperty.id}`, {
      method: "PUT",
      body: JSON.stringify(input),
    });
    const data = await res.json();
    if (data.success) {
      setEditingProperty(null);
      setShowForm(false);
      fetchProperties();
    }
  };

  const handleDelete = async (id: string) => {
    const res = await authFetch(`/api/properties/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      setDeleteConfirm(null);
      fetchProperties();
    }
  };

  const filteredProperties =
    filter === "all" ? properties : properties.filter((p) => p.type === filter);

  const stats = {
    total: properties.length,
    residential: properties.filter((p) => p.type === "residential").length,
    commercial: properties.filter((p) => p.type === "commercial").length,
    industrial: properties.filter((p) => p.type === "industrial").length,
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Top Bar */}
      <header className="bg-[#0E0840] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c9a96e, #b8943f)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E0840" strokeWidth="2.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-white font-semibold text-sm">ASRA Admin</h1>
                  <p className="text-white/40 text-[10px]">Dashboard</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="hidden sm:flex border-l border-white/10 pl-6 gap-2">
                <button
                  onClick={() => setActiveTab("properties")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "properties" ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Properties
                </button>
                <button
                  onClick={() => setActiveTab("content")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "content" ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Site Content
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="/" target="_blank" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                View Site ↗
              </a>
              <button
                onClick={handleLogout}
                className="text-white/50 hover:text-red-400 text-xs transition-colors flex items-center gap-1"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Tabs */}
      <div className="sm:hidden bg-[#0a0530] px-4 py-2 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("properties")}
          className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "properties" ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
          }`}
        >
          Properties
        </button>
        <button
          onClick={() => setActiveTab("content")}
          className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "content" ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
          }`}
        >
          Site Content
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {activeTab === "content" && (
          <ContentEditor />
        )}

        {activeTab === "properties" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Properties", value: stats.total, color: "#0E0840" },
                { label: "Residential", value: stats.residential, color: "#10b981" },
                { label: "Commercial", value: stats.commercial, color: "#6366f1" },
                { label: "Industrial", value: stats.industrial, color: "#f59e0b" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
                {["all", "residential", "commercial", "industrial"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                      filter === f
                        ? "bg-[#0E0840] text-white"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <button
                onClick={() => { setEditingProperty(null); setShowForm(true); }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #c9a96e, #b8943f)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
                Add Property
              </button>
            </div>

            {/* Property List */}
            {loading ? (
              <div className="text-center py-16 text-gray-400">Loading properties...</div>
            ) : filteredProperties.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-gray-400 text-sm">No properties found.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-md transition-shadow"
                  >
                    {/* Thumbnail */}
                    <div className="w-full sm:w-20 h-32 sm:h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      {property.images.length > 0 ? (
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm text-[#0E0840] truncate">{property.title}</h3>
                        {property.tag && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#c9a96e]/10 text-[#c9a96e] whitespace-nowrap">
                            {property.tag}
                          </span>
                        )}
                        {property.featured && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-500 whitespace-nowrap">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                        <span>{property.location}</span>
                        <span className="capitalize px-2 py-0.5 rounded-full bg-gray-50 text-gray-500">{property.type}</span>
                        <span>{property.area}</span>
                        <span className="font-semibold text-[#0E0840]">{property.price}</span>
                        <span>{property.images.length} img{property.images.length !== 1 ? "s" : ""}</span>
                        {property.videos.length > 0 && (
                          <span>{property.videos.length} video{property.videos.length !== 1 ? "s" : ""}</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => { setEditingProperty(property); setShowForm(true); }}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-[#0E0840]/5 text-gray-500 hover:text-[#0E0840] transition-colors"
                        title="Edit"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(property.id)}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Property Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => { setShowForm(false); setEditingProperty(null); }} />
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
            >
              <div className="p-6 md:p-8 border-b border-gray-100">
                <h2 className="font-instrument text-2xl font-bold text-[#0E0840]">
                  {editingProperty ? "Edit Property" : "Add New Property"}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  {editingProperty ? "Update property details below" : "Fill in the property details below"}
                </p>
              </div>
              <div className="p-6 md:p-8">
                <PropertyForm
                  property={editingProperty}
                  onSubmit={editingProperty ? handleEdit : handleAdd}
                  onCancel={() => { setShowForm(false); setEditingProperty(null); }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)} />
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Delete Property</h3>
              <p className="text-gray-500 text-sm mb-6">This action cannot be undone. The property and all its data will be permanently removed.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
