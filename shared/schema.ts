/**
 * Shared types between client and server
 */

export type PropertyType = "residential" | "commercial" | "industrial";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: PropertyType;
  beds?: number;
  baths?: number;
  area: string;
  tag?: string;
  description?: string;
  images: string[];
  videos: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyInput {
  title: string;
  location: string;
  price: string;
  type: PropertyType;
  beds?: number;
  baths?: number;
  area: string;
  tag?: string;
  description?: string;
  images?: string[];
  videos?: string[];
  featured?: boolean;
}

export interface LoginRequest {
  password: string;
}

export interface LoginResponse {
  token: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    servicesTitle: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
  };
  theme: {
    primaryColor: string;
  };
}

export const defaultContent: SiteContent = {
  home: {
    heroTitle: "Asra Real Estate\nConsulting Services",
    heroSubtitle: "Indore's go-to experts for high-growth real estate. We specialize in buying, selling, renting, and investing across Super Corridor, Indore-Ujjain Road, Chhota Bangarda, Bypass & Ring Road.",
    servicesTitle: "Our Services",
  },
  contact: {
    phone: "+91 7880040900",
    email: "asraconsultingservices@gmail.com",
    address: "Regus Sky Space Business Center, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  about: {
    title: "About Asra Real Estate",
    mission: "To seamlessly connect people with extraordinary properties, ensuring trust, transparency, and tailored solutions in every transaction.",
    vision: "To be the most trusted and innovative real estate consultancy, redefining property experiences and building lasting communities.",
  },
  theme: {
    primaryColor: "#0E0840",
  }
};
