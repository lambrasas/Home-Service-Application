import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Service } from "../types/serviceType";
import { fetchServices, fetchCategories } from "../api/api";
import AppRoutes from "./routes/routes";
import { Category } from "../types/categoryType";

const MainContent: React.FC = () => {
  const [serviceData, setServiceData] = useState<Service[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const loadContent = async () => {
      try {
        const [fetchedServices, fetchedCategories] = await Promise.all([
          fetchServices(),
          fetchCategories(),
        ]);
        setServiceData(fetchedServices);
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <AppRoutes serviceData={serviceData} categories={categories} />;
};

export default MainContent;
