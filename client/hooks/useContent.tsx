import React, { createContext, useContext, useEffect, useState } from "react";
import { SiteContent, defaultContent } from "@shared/schema";

interface ContentContextType {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  loading: boolean;
  updateContent: (newContent: SiteContent) => Promise<boolean>;
}

const ContentContext = createContext<ContentContextType | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) setContent(data.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const updateContent = async (newContent: SiteContent) => {
    try {
      const token = localStorage.getItem("admin_token") || localStorage.getItem("adminToken");
      const res = await fetch("/api/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newContent),
      });
      const data = await res.json();
      if (data.success) {
        setContent(data.data);
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return (
    <ContentContext.Provider value={{ content, setContent, loading, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}
