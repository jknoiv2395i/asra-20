import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "motion/react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in — must be in useEffect
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        login(data.data.token);
        navigate("/admin");
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Don't render the form if already authenticated (will redirect via useEffect)
  if (isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-[#0E0840] flex items-center justify-center px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #c9a96e, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-80 h-80 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
          {/* Logo / Header */}
          <div className="text-center mb-8">
            <div className="h-[2px] w-12 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(90deg, #c9a96e, #e8d5a3, #c9a96e)" }} />
            <h1 className="font-instrument text-3xl font-semibold text-white mb-2">
              Admin Panel
            </h1>
            <p className="text-white/50 text-sm">
              Asra Real Estate Consulting Services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.08] border border-white/10 text-white placeholder-white/30 focus:border-[#c9a96e]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/20 transition-all text-sm"
                required
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #c9a96e, #b8943f)",
                color: "#0E0840",
              }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-white/40 text-xs hover:text-white/60 transition-colors">
              ← Back to website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
