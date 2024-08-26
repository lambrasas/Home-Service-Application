import axios from "axios";
import { Category } from "../types/categoryType";
import { Service } from "../types/serviceType";

const apiUrl = "http://localhost:5000/client";

const api = axios.create({
  baseURL: apiUrl,
});

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const response = await api.get("/services");
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw new Error("Failed to fetch services");
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
};
