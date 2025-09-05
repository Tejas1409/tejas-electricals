import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-white/20 backdrop-blur-md py-6"
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 transform transition duration-500 hover:scale-110">
          <img
            src={logo}
            alt="Tejas Electricals"
            className={`rounded-full shadow-lg transition-all duration-500 ${
              scrolled ? "h-12 w-12" : "h-16 w-16"
            }`}
          />
          <span
            className={`font-bold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-yellow-600 text-xl" : "text-white text-2xl"
            }`}
          >
            Tejas Electricals
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-lg">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group transition duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
              {/* Gradient underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={32}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          ) : (
            <Menu
              size={32}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden px-8 py-6 space-y-5 text-lg transition ${
            scrolled
              ? "bg-white/95 backdrop-blur-md text-gray-800 shadow-lg"
              : "bg-black/80 text-white"
          }`}
        >
          <a href="#home" className="block hover:text-yellow-500">Home</a>
          <a href="#about" className="block hover:text-yellow-500">About</a>
          <a href="#services" className="block hover:text-yellow-500">Services</a>
          <a href="#contact" className="block hover:text-yellow-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
