import React from 'react';
import { motion } from 'framer-motion';


import c1 from "../assets/images/client/c1.jpg";
import c2 from "../assets/images/client/c2.jpg";
import c3 from "../assets/images/client/c3.jpg";
import c4 from "../assets/images/client/c4.jpg";
import c5 from "../assets/images/client/c5.jpg";
import c6 from "../assets/images/client/c6.jpg";
import c7 from "../assets/images/client/c7.jpg";
import c8 from "../assets/images/client/c8.jpg";

const Clients = () => {
  const clients = [
    { id: 1, name: "D Y Patil University", logo: c1 },
    { id: 2, name: "Alpha ICT", logo: c2 },
    { id: 3, name: "Sanghar Group", logo: c3 },
    { id: 4, name: "TATA Motors", logo: c4 },
    { id: 5, name: "Human Cloud", logo: c5 },
    { id: 6, name: "Kirloskar Group", logo: c6 },
    { id: 7, name: "Westend Mall", logo: c7 },
    { id: 8, name: "Mahale", logo: c8 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="clients" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Clients</span>
          </h2>
          <p className="text-gray-400 text-lg">Trusted by leading organizations across multiple industries</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center min-h-40 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 cursor-pointer shadow-lg border border-gray-600"
              variants={itemVariants}
              whileHover={{ scale: 1.08, rotate: 2 }}
            >
              <div className="text-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  loading="lazy"
                  className="w-20 h-20 mx-auto mb-4 object-contain"
                />
                <p className="text-sm font-semibold leading-relaxed">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#contact"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
          >
              Become Our Client Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;