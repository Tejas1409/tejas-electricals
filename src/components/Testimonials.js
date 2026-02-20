import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Shriman Manufacturing",
      position: "Operations Manager",
      text: "Tejas Electricals provided excellent service and professionalism. Their team completed our industrial setup on time and within budget. Highly recommended!",
      rating: 5,
      image: ""
    },
    {
      id: 2,
      name: "Datta Pathare",
      company: "Pathare Interiors",
      position: "Owner",
      text: "Outstanding workmanship and timely completion. Their attention to detail is exceptional. Great team to work with. We trust them completely.",
      rating: 4,
      image: "https://via.placeholder.com/80x80?text=PS"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Nobel Hospitals",
      position: "Facility Manager",
      text: "Fast response time and reliable electrical solutions. Their 24/7 support is a game changer for our hospital operations. Best decision we made.",
      rating: 5,
      image: "https://via.placeholder.com/80x80?text=AP"
    },
    {
      id: 4,
      name: "Neha Gupta",
      company: "New Art & Science College",
      position: "Principal",
      text: "Professional team, quality work, and reasonable pricing. They understood our requirements perfectly and delivered beyond expectations.",
      rating: 4,
      image: "https://via.placeholder.com/80x80?text=NG"
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "JKL Residences",
      position: "Developer",
      text: "Their solar installation has reduced our energy bills significantly. Excellent customer service and technical support throughout the process.",
      rating: 5,
      image: "https://via.placeholder.com/80x80?text=VS"
    },
    {
      id: 6,
      name: "Anjali Desai",
      company: "Mangaldas Ventures",
      position: "Store Manager",
      text: "The electrical work was completed efficiently with minimal disruption to our business. Highly professional and courteous team members.",
      rating: 5,
      image: "https://via.placeholder.com/80x80?text=AD"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-yellow-400">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg">What our satisfied clients say about us</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-800 p-8 rounded-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400"
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
            >
              {/* Star Rating */}
              <div className="flex mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                <div>
                  <p className="font-bold text-yellow-400">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;