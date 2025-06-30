import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: "backOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 px-6 py-20 flex items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-b from-yellow-100 to-yellow-100 rounded-3xl shadow-2xl p-8 md:p-14 items-center"
      >
        {/* Text Section */}
        <motion.div
          variants={textVariant}
          className="text-gray-800 space-y-6 text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold text-orange-600">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hey there! I'm{" "}
            <span className="font-semibold text-orange-600">Mim Hossain</span>, a
            passionate web developer who loves building smooth, beautiful,
            interactive digital experiences.
          </p>
          <p className="text-lg">
            I build with{" "}
            <span className="text-purple-600 font-medium">
              JavaScript, React, Node.js, MongoDB
            </span>
            , and love clean UI that works everywhere.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy gaming 🎮, good food 🍕, and exploring fun places 🗺️.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariant}
          className="relative w-44 h-44 md:w-60 md:h-60 mx-auto"
        >
          {/* Animated gradient glow */}
          <motion.div
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 blur-2xl"
          ></motion.div>

          {/* Profile Image */}
          <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-xl w-full h-full">
            <img
              src="https://i.ibb.co/nMzVFdRm/IMG-20240211-221850.jpg"
              alt="Mim Hossain"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
