import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeContext from "../context/ThemeContext";

const projects = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    type: "Web Application",
    description:
      "A personal portfolio that displays my projects, skills, contact details, and a brief about myself.",
    image: "/personal_portfolio.png",
    brand: "Portfolio",
    link: "https://yourportfolio.com",
    technologies: [
      {
        name: "HTML",
        icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      },
      {
        name: "CSS",
        icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      },
      {
        name: "JavaScript",
        icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      },
      {
        name: "React",
        icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Node.js",
        icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      },
      {
        name: "Vercel",
        icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
      },
      {
        name: "GitHub",
        icon: "https://img.icons8.com/ios-glyphs/30/github.png",
      },
    ],
  },
  {
    id: "datawhiz",
    title: "DataWhiz - An Automated Tool for Data Insights",
    type: "Web Application",
    image: "/DataWhiz.jpg",
    brand: "DataWhiz",
    link: "https://datawhiz.com",
    description:
      "An innovative tool that automates data analysis and provides insights.",
    technologies: [
      {
        name: "HTML",
        icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      },
      {
        name: "CSS",
        icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      },
      {
        name: "JavaScript",
        icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      },
      {
        name: "Python",
        icon: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      },
      {
        name: "MongoDB",
        icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      },
      {
        name: "Vercel",
        icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
      },
      {
        name: "GitHub",
        icon: "https://img.icons8.com/ios-glyphs/30/github.png",
      },
    ],
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedProjectId, setSelectedProjectId] = useState("portfolio");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get("id");
    if (projectId) setSelectedProjectId(projectId);
  }, [location]);

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  const isDark = theme === "dark";

  return (
    <div
      className={`relative min-h-screen py-20 transition-all duration-300 ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-200 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-10 xxs:mb-14 px-4">
          <h1 className="text-3xl xxs:text-4xl sm:text-5xl font-bold mb-2">Projects</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Here are some of the projects I worked on recently
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-10">
          {/* Sidebar Buttons */}
          <div className="w-full md:w-1/4 hidden md:flex flex-col space-y-2">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className={`px-4 py-2 text-left text-lg font-semibold transition-all group ${
                  isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-900 hover:text-gray-600"
                }`}
              >
                <span className="relative inline-block">
                  {project.brand}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gray-400 w-full origin-left transition-transform duration-300 ${
                      selectedProjectId === project.id ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  ></span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full flex flex-col gap-12 xxs:gap-16">
            <div className={`p-6 rounded-xl shadow-lg ${isDark ? "bg-gray-800" : "bg-gray-300"}`}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-60 sm:h-64 object-cover rounded-lg"
              />

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                  <p className="mt-2 text-lg">{selectedProject.description}</p>
                </div>

                <h4 className="text-xl font-semibold">Technologies I used:</h4>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 rounded-full flex items-center py-2 px-4 gap-3"
                    >
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                      <p className="text-xl font-medium text-gray-800">{tech.name}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 py-2 px-6 rounded-full font-semibold border-2 transition-colors text-base xxs:text-xl ${
                      isDark
                        ? "text-gray-300 border-gray-300 hover:bg-gray-300 hover:text-gray-800"
                        : "text-gray-600 border-gray-800 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <FaLink className="w-5 h-5" />
                    Go to {selectedProject.brand}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Projects;
