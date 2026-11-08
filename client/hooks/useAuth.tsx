import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("admin_token") || localStorage.getItem("adminToken");
  });

  const isAuthenticated = !!token;

  const login = (newToken: string) => {
    localStorage.setItem("admin_token", newToken);
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("adminToken");
    setToken(null);
  };

  // Verify token on mount
  useEffect(() => {
    const currentToken = token || localStorage.getItem("admin_token") || localStorage.getItem("adminToken");
    if (currentToken) {
      fetch("/api/admin/verify", {
        headers: { Authorization: `Bearer ${currentToken}` },
      })
        .then((res) => {
          if (!res.ok) {
            logout();
          }
        })
        .catch(() => {
          // If network error, don't kick user out
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// API helper that auto-attaches auth token
export function useAuthFetch() {
  const { token, logout } = useAuth();

  return async (url: string, options: RequestInit = {}) => {
    const activeToken = token || localStorage.getItem("admin_token") || localStorage.getItem("adminToken");
    const headers: Record<string, string> = {
      ...((options.headers as Record<string, string>) || {}),
    };

    if (activeToken) {
      headers["Authorization"] = `Bearer ${activeToken}`;
    }

    // Only set Content-Type for non-FormData requests
    if (!(options.body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      logout();
    }

    return response;
  };
}
