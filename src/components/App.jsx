import React from "react";
import Header from "./static/Header";
import Footer from "./static/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectsPage   />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
