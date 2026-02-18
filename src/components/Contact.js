import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.phone.match(/^[0-9]{10}$/)) {
      newErrors.phone = "Valid 10-digit phone number required";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would send the form data to your backend
      console.log("Form submitted:", formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Have questions? We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-6 items-start">
              <Phone className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-400">+91 9822772824</p>
                <p className="text-gray-400">+91 9146041427</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <Mail className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-400">tejaselectricals2790@gmail.com</p>
                <p className="text-gray-400">menegajanan@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-400">Karvenagr Pune, Maharashtra</p>
                <p className="text-gray-400">India - 411001</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                className="bg-green-500/20 border border-green-500 rounded-lg p-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="text-green-400 font-bold text-lg">✓ Thank you for your message!</p>
                <p className="text-gray-300 mt-2">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full bg-gray-700 text-white px-6 py-3 rounded-lg focus:outline-none focus:border-2 focus:border-yellow-400 transition ${
                      errors.name ? 'border-2 border-red-500' : 'border border-gray-600'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full bg-gray-700 text-white px-6 py-3 rounded-lg focus:outline-none focus:border-2 focus:border-yellow-400 transition ${
                      errors.email ? 'border-2 border-red-500' : 'border border-gray-600'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone (10 digits)"
                    className={`w-full bg-gray-700 text-white px-6 py-3 rounded-lg focus:outline-none focus:border-2 focus:border-yellow-400 transition ${
                      errors.phone ? 'border-2 border-red-500' : 'border border-gray-600'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full bg-gray-700 text-white px-6 py-3 rounded-lg focus:outline-none focus:border-2 focus:border-yellow-400 transition ${
                      errors.subject ? 'border-2 border-red-500' : 'border border-gray-600'
                    }`}
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message (min. 10 characters)"
                    rows="5"
                    className={`w-full bg-gray-700 text-white px-6 py-3 rounded-lg focus:outline-none focus:border-2 focus:border-yellow-400 transition resize-none ${
                      errors.message ? 'border-2 border-red-500' : 'border border-gray-600'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
