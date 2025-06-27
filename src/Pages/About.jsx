import React from "react";

const About = () => {
  return (
    <section
      className="min-h-[50vh] bg-gradient-to-r from-orange-50 to-yellow-100 px-6 py-16 flex items-center justify-center"
    >
      <div className="max-w-6xl min-h-[50vh] w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl p-8 md:p-14 items-center">
        
        {/* Left - Text */}
        <div className="text-gray-800 space-y-6 text-center md:text-left order-2 md:order-1">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p>
            Hey there! I'm{" "}
            <span className="font-semibold text-orange-600">
              Mim Hossain
            </span>
            , a self-driven and creative web developer with a deep love for turning ideas into interactive digital experiences. My journey into programming started out of sheer curiosity—I was fascinated by how websites worked behind the scenes. That curiosity quickly turned into passion.
          </p>
          <p>
            I've been working with{" "}
            <span className="text-purple-600 font-medium">
              JavaScript, React, Node.js, and MongoDB
            </span>
            . What excites me most is crafting intuitive and aesthetic UI that's also responsive and efficient.
          </p>
          <p>
            Besides coding, I love to <span className="italic">play games and eat</span>. Exploring cafes and spontaneous walks also keep my creativity flowing.
          </p>
        </div>

        {/* Right - Image */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto md:mx-0 order-1 md:order-2">
          {/* ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-900 via-blue-600 to-pink-600 animate-pulse blur-xl opacity-70"></div>

          {/* img */}
          <div className="relative rounded-full overflow-hidden border-4 border-white shadow-lg w-full h-full">
            <img
              src="https://i.ibb.co/nMzVFdRm/IMG-20240211-221850.jpg"
              alt="Mim Hossain"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
