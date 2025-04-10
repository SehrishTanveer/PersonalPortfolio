import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    color: "bg-[#0077B5]",
    url: "https://linkedin.com/in/sehrish-tanveer-500283279",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    color: "bg-[#333333]",
    url: "https://github.com/SehrishTanveer2002",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={20} />,
    color: "bg-[#D44638]",
    url: "mailto:sehrishtanveer249@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    color: "bg-[#E1306C]",
    url: "https://instagram.com/sehrish._.tanvir",
  },
];

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      role="contentinfo"
      className={`py-10 px-6 md:px-16 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-gray-300 text-gray-900"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {/* Logo & Slogan */}
        <div>
          <motion.h1
            className="text-3xl font-bold cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            &lt;/Sehrish&gt;
          </motion.h1>
          <p className="text-sm mt-2" aria-label="Slogan">
            Crafting the Future with ♥ & Tech
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="text-lg font-medium mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:underline">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">
                My Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Get in Touch
              </Link>
            </li>
            <li>
              <a
                href="/SehrishTanveer_SoftwareEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* My Work */}
        <nav aria-label="Project Links">
          <h3 className="text-lg font-medium mb-2">My Work</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/projects?id=portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/projects?id=datawhiz" className="hover:underline">
                DataWhiz
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="sm:col-span-3 md:col-span-1 flex sm:justify-center">
          <div>
            <h3 className="text-lg font-medium mb-2 sm:text-center">
              Connect with Me
            </h3>
            <div className="flex justify-center gap-3">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm">
        &copy; 2024 Sehrish Tanveer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
