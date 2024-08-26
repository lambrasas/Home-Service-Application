import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../Hero";
import ServicesList from "../ServicesList";
import Categories from "../Categories";
import CategoryPage from "../../Pages/CategoryPage";
import { Service } from "../../types/serviceType";
import { Category } from "../../types/categoryType";

interface AppRoutesProps {
  serviceData: Service[];
  categories: Category[];
}

const AppRoutes: React.FC<AppRoutesProps> = ({ serviceData, categories }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Categories categories={categories} />
            <b>Popular businesses</b>
            <ServicesList serviceData={serviceData} />
          </>
        }
      />
      <Route
        path="/search/:categoryName"
        element={
          <CategoryPage services={serviceData} categories={categories} />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
