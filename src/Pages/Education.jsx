import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-50 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white shadow-2xl rounded-3xl p-10 md:p-16">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-orange-600">Education</h2>
          <p className="text-xl text-gray-700 font-semibold">
            🎓 BSc in Mathematics
          </p>
          <p className="text-lg text-gray-700 font-medium">
            Begum Badrunnesa Government Girls' College
          </p>
          <p className="text-gray-600 italic">
            7 Bakshi Bazar, Dhaka-1211, Bangladesh
          </p>
          <p className="text-lg text-gray-600">
            📅 2024 – Ongoing
          </p>
          <p className="text-gray-600">
            Currently pursuing my Bachelor of Mathematics at Begum Badrunnesa Government Girls' College. I am focused on developing strong mathematical and analytical skills.
          </p>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co/KxhYvLC9/education.jpg"
            alt="Begum Badrunnesa Government Girls' College"
            className="rounded-3xl shadow-lg w-full max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
