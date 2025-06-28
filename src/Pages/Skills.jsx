import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,

} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "HTML", level: 90, icon: <FaHtml5 className="inline text-red-600 mr-2" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="inline text-blue-600 mr-2" /> },
    { name: "JavaScript", level: 80, icon: <FaJsSquare className="inline text-yellow-500 mr-2" /> },
    { name: "React", level: 75, icon: <FaReact className="inline text-cyan-500 mr-2" /> },
  ],
  Backend: [
    { name: "Node.js", level: 70, icon: <FaNodeJs className="inline text-green-600 mr-2" /> },
    { name: "Express.js", level: 65, icon: <SiExpress className="inline text-gray-700 mr-2" /> },
    { name: "MongoDB", level: 60, icon: <SiMongodb className="inline text-green-800 mr-2" /> },
  ],
  Tools: [
    { name: "Git", level: 80, icon: <FaGitAlt className="inline text-orange-600 mr-2" /> },
    { name: "VSCode", level: 85,  },
  ],
};

const categoryIcons = {
  Frontend: <FaCode className="text-yellow-600 w-8 h-8 animate-bounce" />,
  Backend: <FaDatabase className="text-yellow-600 w-8 h-8 animate-bounce" />,
  Tools: <FaTools className="text-yellow-600 w-8 h-8 animate-bounce" />,
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.25, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section  id="skills" className="min-h-[70vh] bg-gradient-to-b from-yellow-100 to-yellow-200 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-14 text-yellow-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-yellow-500 transition-shadow duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                {categoryIcons[category]}
                <h3 className="text-3xl font-bold text-yellow-800 tracking-wide">
                  {category}
                </h3>
              </div>

              <div className="space-y-6">
                {skills.map(({ name, level, icon }) => (
                  <motion.div key={name} variants={itemVariants} className="group">
                    <div className="flex justify-between font-semibold text-yellow-900 mb-1">
                      <span>{icon}{name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {level}%
                      </motion.span>
                    </div>

                    <div className="w-full bg-yellow-200 rounded-full h-5 overflow-hidden shadow-inner group-hover:shadow-yellow-400 transition-shadow duration-300">
                      <motion.div
                        className="h-5 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 shadow-lg"
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
