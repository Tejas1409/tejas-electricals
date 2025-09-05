import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          About <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8"
        >
          At <span className="font-semibold text-blue-600">Tejas Electricals</span>, 
          we provide <span className="font-semibold text-yellow-600">reliable</span> and 
          <span className="font-semibold text-yellow-600"> affordable</span> electrical solutions.  
          With <span className="font-semibold text-blue-600">30+ years</span> of expertise, 
          we are committed to powering homes, industries, and businesses with 
          <span className="font-semibold text-yellow-600"> safe, efficient, and modern systems.</span>
        </motion.p>

        <motion.a
          href="#services"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition"
        >
          Explore Our Services
        </motion.a>
      </div>
    </section>
  );
}
