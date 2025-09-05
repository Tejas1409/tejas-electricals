import { motion } from "framer-motion";

// Import your local images
import residentialImg from "../assets/images/residential.jpg";
import industrialImg from "../assets/images/industrial.jpg";
import acImg from "../assets/images/ac.jpg";
import cctvImg from "../assets/images/cctv.jpg";
import fireImg from "../assets/images/fire.jpg";
import solarImg from "../assets/images/solar.jpg";

const services = [
  { title: "Residential Wiring", img: residentialImg, desc: "Complete home wiring & electrical installation services." },
  { title: "Industrial Projects", img: industrialImg, desc: "Large-scale electrical setups for industries & warehouses." },
  { title: "AC Installation & Repair", img: acImg, desc: "Professional AC setup, wiring, and servicing." },
  { title: "CCTV & Security Systems", img: cctvImg, desc: "Advanced CCTV and security alarm installations." },
  { title: "Fire Safety Systems", img: fireImg, desc: "Reliable fire detection & suppression systems." },
  { title: "Solar Solutions", img: solarImg, desc: "Affordable and sustainable solar panel installations." },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Decorative glowing shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-14"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 bg-white/70 backdrop-blur-lg border border-gray-200 hover:border-yellow-400"
            >
              {/* Service Image */}
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Service Details */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
