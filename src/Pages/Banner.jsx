import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="min-h-[60vh] bg-gradient-to-r from-orange-50 to-yellow-100 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-900 via-blue-600 to-pink-600 animate-pulse blur-xl opacity-70"></div>
          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://i.ibb.co/nMzVFdRm/IMG-20240211-221850.jpg"
              alt="Mim Hossain"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left px-4 md:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Hey I’m <span className="text-yellow-700">Mim Hossain</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mt-2 text-yellow-800"
          >
            I’m a <span className="text-yellow-600">Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-gray-600 text-sm md:text-base"
          >
            I’m a new web developer eager to learn and create amazing websites.
            Passionate about frontend design and coding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 mt-6 justify-center md:justify-start text-lg"
          >
            <a
              href="https://github.com/Mim-dot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/share/1A6dFWW18A/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
          </motion.div>

          <motion.a
            href="https://drive.google.com/file/d/10BJa2g6MFk1w40WtNq53XpGbvTEq1p3q/view?usp=sharing"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block mt-6 px-6 py-2 bg-yellow-700 hover:bg-yellow-800 text-white rounded-full font-semibold shadow transition-colors duration-300"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
