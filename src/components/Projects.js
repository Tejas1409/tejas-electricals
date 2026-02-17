import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Residential Wiring Installation",
      description: "Complete electrical installation for a modern residential complex with modern circuit protection systems",
      image: "https://via.placeholder.com/400x300?text=Residential+Project",
      category: "Residential"
    },
    {
      id: 2,
      title: "Industrial Power Setup",
      description: "High-voltage electrical systems for manufacturing facility with backup generators and distribution panels",
      image: "https://via.placeholder.com/400x300?text=Industrial+Project",
      category: "Industrial"
    },
    {
      id: 3,
      title: "Solar Panel Installation",
      description: "5kW rooftop solar panel setup with battery backup system and monitoring dashboard",
      image: "https://via.placeholder.com/400x300?text=Solar+Project",
      category: "Solar"
    },
    {
      id: 4,
      title: "CCTV Network System",
      description: "24-camera surveillance system with cloud storage, night vision, and 24/7 monitoring",
      image: "https://via.placeholder.com/400x300?text=CCTV+Project",
      category: "Commercial"
    },
    {
      id: 5,
      title: "Fire Safety Systems",
      description: "Automatic fire detection and suppression system installation with emergency protocols",
      image: "https://via.placeholder.com/400x300?text=Fire+Safety+Project",
      category: "Commercial"
    },
    {
      id: 6,
      title: "Smart AC Installation",
      description: "Commercial AC system with smart thermostat control and energy optimization features",
      image: "https://via.placeholder.com/400x300?text=AC+Installation",
      category: "Commercial"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial", "Solar"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Showcase of our completed work and successful implementations</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === cat 
                  ? "bg-yellow-400 text-gray-900 shadow-lg" 
                  : "bg-gray-700 text-white hover:bg-gray-600 border border-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-48 bg-gray-700 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-xs font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
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
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Your Project Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;