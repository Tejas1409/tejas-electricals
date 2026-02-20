import React, { useState } from "react";
import { motion } from "framer-motion";

//import p1 from "../assets/images/projects/p1.jpg";
import p2 from "../assets/images/projects/p2.jpg";
import p3 from "../assets/images/projects/p3.jpg";
import p4 from "../assets/images/projects/p4.jpg";
//import p5 from "../assets/images/projects/p5.jpg";
import p6 from "../assets/images/projects/p6.jpg";
import p7 from "../assets/images/projects/p7.jpg";
//import p8 from "../assets/images/projects/p8.jpg";
import p9 from "../assets/images/projects/p9.jpg";

const Projects = () => {
 const [selectedCategory, /*setSelectedCategory*/] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Westend Mall (Aundh)",
      description:
        "Complete commercial electrical wiring and lighting installation for retail spaces and common areas.",
      image: p4,
      category: "Commercial",
    },
    {
      id: 2,
      title: "Astekar Jwellers (Laxmi Road)",
      description:
        "High-quality electrical setup with focused lighting and secure power systems for showroom operations.",
      image: p2,
      category: "Commercial",
    },
    {
      id: 3,
      title: "New Art and Science College (Nagar)",
      description:
        "Reliable electrical installation and maintenance work for classrooms, labs, and campus facilities.",
      image: p3,
      category: "Commercial",
    },
    {
      id: 4,
      title: "Mahle (Chakan)",
      description:
        "Complete industrial electrical installation, panel wiring, and power distribution for factory operations",
      image: p9,
      category: "Industrial",
    },
    {
      id: 5,
      title: "Residential Project (Bavdhan)",
      description:
        "Complete home electrical wiring and lighting solutions with safety and quality standards.",
      image: p7,
      category: "Residential",
    },
    {
      id: 6,
      title: "Human Cloud (Baner)",
      description:
        "Modern electrical infrastructure and lighting installation for corporate office workspace.",
      image: p6,
      category: "Commercial",
    },
  ];

  // const categories = [
  //   "All",
  //   "Residential",
  //   "Commercial",
  //   "Industrial",
  //   "Solar",
  // ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
          <p className="text-gray-400 text-lg">
            Showcase of our completed work and successful implementations
          </p>
        </motion.div>

        {/* Category Filter
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
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
        </div> */}

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
                <h3 className="text-xl font-bold mb-3 text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
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
            Get Your Project Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
