import { useState } from "react";
import logoImg from "../assets/images/logo.png";

export default function Navbar({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Our Shop" },
    { id: "details", label: "Product Details" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="bg-blue-500 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo Image */}
        <button
          onClick={() => handleLinkClick("home")}
          className="flex items-center  focus:outline-none"
        >
          <img
            src={logoImg}
            alt="LUGX Gaming"
            className="h-10 object-contain"
          />
        </button>

        <nav className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition  ${
                activePage === item.id
                  ? "bg-white/15 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleLinkClick("contact")}
            className="ml-3 bg-rose-400 hover:bg-white hover:text-rose-400 text-white uppercase text-sm font-semibold px-6 py-2.5 rounded-full transition duration-300 "
          >
            SIGN IN
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none "
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 px-6 py-4 flex flex-col items-center text-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full py-2.5 rounded-full text-sm font-medium transition ${
                activePage === item.id ? "bg-white/20" : "hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick("contact")}
            className="mt-2 bg-rose-400 text-white uppercase text-sm font-semibold px-8 py-2.5 rounded-full"
          >
            SIGN IN
          </button>
        </div>
      )}
    </header>
  );
}
