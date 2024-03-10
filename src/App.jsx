import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import BrandPage from "./pages/BrandPage";
import InfluencerPage from "./pages/InfluencerPage";
import CompanySection from "./pages/CompanySection";
import FormPage from "./pages/FormPage";
const App = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/influencer" element={<InfluencerPage />} />
          <Route path="/company" element={<CompanySection />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
