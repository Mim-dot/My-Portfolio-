import React from "react";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-lg shadow-md py-4 px-6 flex items-center justify-between w- rounded-3xl">
    <div className="flex items-center gap-3">
  {/* Logo Icon */}
  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center rounded-full font-extrabold text-xl shadow-lg tracking-wider uppercase">
    MH
  </div>

  {/* Brand Name */}
  <div className="text-2xl font-extrabold text-gray-800 tracking-wide">
    Cloud<span className="text-orange-500">Ramp</span>
  </div>
</div>


      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        {["about", "skills", "education", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative text-gray-700 hover:text-orange-600 transition duration-300 font-medium group"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
