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
