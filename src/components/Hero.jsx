import React, { useContext } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import ThemeContext from "../context/ThemeContext";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "https://linkedin.com/in/sehrish-tanveer-500283279",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    url: "https://github.com/SehrishTanveer2002",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={24} />,
    url: "mailto:sehrishtanveer249@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    url: "https://instagram.com/sehrish._.tanvir",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col justify-center transition-all duration-300
        ${
          theme === "dark"
            ? "bg-gray-900 text-gray-300"
            : "bg-gray-200 text-gray-800"
        }`}
    >
      <div className="absolute inset-0 flex items-center justify-center h-full">
        <h1 className="text-[150px] sm:text-[200px] md:text-[330px] font-black text-gray-500 opacity-20 select-none">
          &lt;/&gt;
        </h1>
      </div>

      <div className="absolute bottom-0 left-6 flex-col items-center space-y-4 hidden md:flex z-20">
        {socialMedia.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 ${
              theme === "dark"
                ? "text-gray-300 hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {social.icon}
          </motion.a>
        ))}
        <div
          className={`w-[2px] h-24 mt-2 ${
            theme === "dark" ? "bg-gray-300" : "bg-gray-800"
          }`}
        />
      </div>

      {/* Content */}
      <div className="z-10 px-6 md:px-20 text-left mt-32 md:mt-14 xl:mt-24">
        <h1 className="text-5xl xxs:text-6xl md:text-[100px] lg:text-[130px] font-black leading-none lg:tracking-wide">
          Sehrish <span className="tracking-wide">Tanveer</span>
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-col xxs:flex-row mt-5 ml-5 md:ml-24 whitespace-nowrap z-10 xxs:mt-8 xxs:ml-6 space-y-3 xxs:space-y-0 xxs:space-x-4">
        <Button
          text="About Me"
          styleType="primary"
          onClick={() => handleNavigate("/about")}
        />
        <Button
          text="Contact Me"
          styleType="secondary"
          onClick={() => handleNavigate("/contact")}
        />
      </div>
    </div>
  );
};

export default Hero;
