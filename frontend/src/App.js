import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MenuSection from "./components/MenuSection.jsx";
import LocationSection from "./components/LocationSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;