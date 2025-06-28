import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 text-gray-800 font-sans">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 drop-shadow-sm">
          My Projects
        </h1>
        <p className="text-md text-gray-600 leading-relaxed">
          From full-stack apps to creative UIs, I enjoy building things that are
          clean, responsive, and intuitive.
        </p>
      </div>

      <div className="space-y-20 mx-4 md:mx-20">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <img
            className="w-full md:h-[250px] md:w-[400px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            src="https://i.ibb.co/zV6F2QP2/Screenshot-122.png"
            alt="Freelancer Marketplace"
          />
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-700 mb-1">
              Freelancer Marketplace
            </h2>
            <p className="text-sm text-gray-500 mb-4">April 2025</p>
            <button
              className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition-all duration-300"
              onClick={() =>
                document.getElementById("modal_project1").showModal()
              }
            >
              View <FaLocationArrow />
            </button>
            {/* card */}
            <dialog id="modal_project1" className="modal">
              <div className="modal-box bg-gradient-to-br w-[1050px] max-w-full from-blue-100 via-white to-blue-50 shadow-2xl border border-blue-200 rounded-xl mx-auto">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-red-500">
                    ✕
                  </button>
                </form>

                <h3 className="text-3xl font-extrabold text-blue-700 mb-4">
                  Freelancer Marketplace
                </h3>

                {/* Image & Links */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
                  {/* Buttons */}
                  <div className="flex gap-4">
                    <button>
                      <a
                        href="https://assi-10-9b813.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 text-center"
                      >
                        🔗 Live Link
                      </a>{" "}
                    </button>
                    <button>
                      <a
                        href="https://github.com/Mim-dot/Assignment-10.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 text-center"
                      >
                        🐱 GitHub Repo
                      </a>{" "}
                    </button>
                  </div>

                  {/* Image */}
                  <div className="md:w-[400px]">
                    <img
                      className="w-full md:h-[250px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                      src="https://i.ibb.co/zV6F2QP2/Screenshot-122.png"
                      alt="Freelancer Marketplace"
                    />
                  </div>
                </div>

                {/* Modal Body Content */}
                <div className="text-base text-gray-800 space-y-6 leading-relaxed">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xl font-semibold text-purple-600 border-l-4 border-purple-400 pl-3 mb-2">
                      🚀 Tech Stack
                    </h4>
                    <p className="text-gray-700">
                      <span className="font-medium text-gray-900">
                        Frontend:
                      </span>{" "}
                      React, Tailwind CSS
                      <br />
                      <span className="font-medium text-gray-900">
                        Backend:
                      </span>{" "}
                      Node.js, Express.js
                      <br />
                      <span className="font-medium text-gray-900">
                        Auth & DB:
                      </span>{" "}
                      Firebase Authentication, MongoDB
                    </p>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h4 className="text-xl font-semibold text-pink-600 border-l-4 border-pink-400 pl-3 mb-2">
                      📌 Project Overview
                    </h4>
                    <p>
                      A modern freelance platform where users can post tasks,
                      bid, message in real-time, and manage roles like admin,
                      freelancer, and client — all in one dashboard.
                    </p>
                  </div>

                  {/* Key Challenges */}
                  <div>
                    <h4 className="text-xl font-semibold text-orange-600 border-l-4 border-orange-400 pl-3 mb-2">
                      ⚙️ Key Challenges
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>
                        Secure and dynamic authentication flow with role
                        handling
                      </li>
                      <li>
                        Responsive and adaptive layout for all screen sizes
                      </li>
                      <li>
                        Seamless modal management and conditional rendering
                      </li>
                    </ul>
                  </div>

                  {/* Future Enhancements */}
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 border-l-4 border-green-400 pl-3 mb-2">
                      🔮 Future Enhancements
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Admin dashboard with full user control</li>
                      <li>Performance analytics and visual reports</li>
                      <li>Push notifications via service workers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <img
            className="w-full md:h-[250px] md:w-[400px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            src="https://i.ibb.co/vvB1CTz0/Screenshot-123.png"
            alt="Knowledge Sharing Platform"
          />
          <div className="w-full md:w-2/3 text-end">
            <h2 className="text-2xl font-semibold text-green-700 mb-1">
              Knowledge Sharing Platform
            </h2>
            <p className="text-sm text-gray-500 mb-4">May 2025</p>
            <button
              className="flex items-center gap-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-full transition-all duration-300 ml-auto"
              onClick={() =>
                document.getElementById("modal_project2").showModal()
              }
            >
              View <FaLocationArrow />
            </button>
          <dialog id="modal_project2" className="modal text-left">
  <div className="modal-box bg-gradient-to-br w-[1050px] max-w-full from-green-100 via-white to-green-50 shadow-xl border border-green-200 rounded-xl mx-auto">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-red-500">
        ✕
      </button>
    </form>

    <h3 className="text-3xl font-extrabold text-green-700 mb-4">
      Knowledge Sharing Platform
    </h3>

    {/* Image & Links */}
    <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
      {/* Buttons */}
      <div className="flex gap-4">
      <button>
     <a
          href=" https://assi-11.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 text-center"
        >
          🔗 Live Link
        </a>    </button> 
        <button> <a
          href="https://github.com/Mim-dot/Assignment-11.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 text-center"
        >
          🐱 GitHub Repo
        </a></button>
       
      </div>

      {/* Image */}
      <div className="md:w-[400px]">
         <img
            className="w-full md:h-[250px] md:w-[400px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            src="https://i.ibb.co/vvB1CTz0/Screenshot-123.png"
            alt="Knowledge Sharing Platform"
          />
      </div>
    </div>

    {/* Modal Body Content */}
    <div className="text-base text-gray-800 space-y-6 leading-relaxed">
      {/* Tech Stack */}
      <div>
        <h4 className="text-xl font-semibold text-purple-600 border-l-4 border-purple-400 pl-3 mb-2">
          🚀 Tech Stack
        </h4>
        <p className="text-gray-700">
          <span className="font-medium text-gray-900">Frontend:</span> React, Tailwind CSS
          <br />
          <span className="font-medium text-gray-900">Backend:</span> Node.js, Express.js
          <br />
          <span className="font-medium text-gray-900">Auth & DB:</span> Firebase Authentication, MongoDB
        </p>
      </div>

      {/* Project Overview */}
      <div>
        <h4 className="text-xl font-semibold text-pink-600 border-l-4 border-pink-400 pl-3 mb-2">
          📌 Project Overview
        </h4>
        <p>
          A modern Q&A and blogging platform where users share insights, ask questions, and learn together.
        </p>
      </div>

      {/* Key Challenges */}
      <div>
        <h4 className="text-xl font-semibold text-orange-600 border-l-4 border-orange-400 pl-3 mb-2">
          ⚙️ Key Challenges
        </h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Implementing efficient real-time Q&A and content updates</li>
          <li>Ensuring seamless user experience across devices</li>
          <li>Managing user roles and content moderation</li>
        </ul>
      </div>

      {/* Future Enhancements */}
      <div>
        <h4 className="text-xl font-semibold text-green-600 border-l-4 border-green-400 pl-3 mb-2">
          🔮 Future Enhancements
        </h4>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Advanced tagging and search functionality</li>
          <li>Community reputation and badges system</li>
          <li>Push notifications and email digests</li>
        </ul>
      </div>
    </div>
  </div>
</dialog>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
