import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 mt-16 overflow-hidden">
      {/* Decorative glowing shapes */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        {/* Logo + Company Name */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg">
          ⚡ Tejas Electricals
        </h2>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Powering Pune with Safe, Reliable & Modern Electrical Solutions
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mt-8">
          <a href="#home" className="hover:text-yellow-400 transition font-medium">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition font-medium">About</a>
          <a href="#services" className="hover:text-yellow-400 transition font-medium">Services</a>
          <a href="#contact" className="hover:text-yellow-400 transition font-medium">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="tel:+919822772824" className="p-3 rounded-full bg-blue-700 hover:bg-yellow-500 transition transform hover:scale-110 shadow-lg">
            <Phone size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61588283980309" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-blue-700 hover:bg-yellow-500 transition transform hover:scale-110 shadow-lg">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/tejas.electricals?igsh=dzBidXQwZWV4MXZx&utm_source=qr" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-blue-700 hover:bg-yellow-500 transition transform hover:scale-110 shadow-lg">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/tejas-electricals-8a25813b2/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-blue-700 hover:bg-yellow-500 transition transform hover:scale-110 shadow-lg">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} Tejas Electricals. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
