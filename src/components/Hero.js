import { motion } from "framer-motion";
import heroBg from "../assets/images/bg-hero.jpg";
import logo from "../assets/images/logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="Tejas Electricals Logo"
            className="h-36 md:h-44 mb-2 drop-shadow-2xl"
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wide drop-shadow-lg">
            TEJAS ELECTRICALS
          </h2>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Powering Pune with{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Safe & Reliable
          </span>{" "}
          Solutions
        </h1>

        {/* Subtitle */}
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-200">
          Residential | Industrial | AC | CCTV | Fire Safety | Solar | Security Systems
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold"
          >
            ⚡ Our Services
          </a>
          <a
            href="#contact"
            className="bg-yellow-500 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition font-semibold"
          >
            📞 24/7 Emergency – Call Now
          </a>
        </div>

        {/* Availability Note */}
        <p className="mt-6 text-sm text-gray-300">
          Available 9 AM - 6 PM | License Certified
        </p>
      </motion.div>
    </section>
  );
}
