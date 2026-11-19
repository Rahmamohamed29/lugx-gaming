import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" className="min-h-screen bg-white font-sans">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {activePage === "home" && (
        <HomePage
          onNavigate={handleNavigate}
          onSelectGame={() => handleNavigate("details")}
        />
      )}

      {activePage === "shop" && (
        <ShopPage
          onNavigate={handleNavigate}
          onSelectGame={() => handleNavigate("details")}
        />
      )}

      {activePage === "details" && (
        <ProductDetailsPage onNavigate={handleNavigate} />
      )}

      {activePage === "contact" && <ContactPage onNavigate={handleNavigate} />}

      <Footer />
    </div>
  );
}
