import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?electricity,city')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>

      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-6 text-center text-white"
      >
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
          Contact Us
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-200 mb-12">
          Have questions or need assistance? Reach out to{" "}
          <span className="font-semibold text-yellow-400">Tejas Electricals</span> — 
          we’re here to provide quick support and reliable service.
        </p>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Info Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6 border border-white/20">
            <p>
              <span className="font-semibold text-yellow-400">📍 Address:</span>{" "}
              Shop No.104, Kamana Vasahat, Sahawas Society
               Karvenegar, Pune - 411052
            </p>
            <p>
              <span className="font-semibold text-yellow-400">📞 Phone:</span>{" "}
              +91 9146041427
            </p>
            <p>
              <span className="font-semibold text-yellow-400">📧 Email:</span>{" "}
              tejaselectricals2790@gmail.com
            </p>
            <p>
              <span className="font-semibold text-yellow-400">🕒 Hours:</span>{" "}
              Mon–Sat 9AM – 6PM
            </p>
          </div>

          {/* Form Card */}
          <form className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-4 border border-white/20">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300/40 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white/80 text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300/40 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white/80 text-black"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300/40 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white/80 text-black"
              required
            ></textarea>
            <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition font-semibold">
              ✉️ Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
