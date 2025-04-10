import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const location = useLocation();
  const activeNavItem = location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/projects", label: "Projects" },
    { id: "/contact", label: "Contact" },
  ];

  const backgroundClass =
    isOpen || isScrolled
      ? theme === "dark"
        ? "bg-gray-800"
        : "bg-gray-300"
      : theme === "dark"
      ? "bg-gray-900"
      : "bg-gray-200";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${backgroundClass}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 relative">
        <Link to="/" aria-label="Homepage">
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            &lt;/Sehrish&gt;
          </motion.div>
        </Link>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-2 lg:hidden z-50 relative">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <BsMoon size={22} /> : <BsSun size={22} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <motion.svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              className="cursor-pointer"
              animate={isOpen ? "open" : "closed"}
              initial="closed"
            >
              <motion.path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
              />
              <motion.path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
              />
            </motion.svg>
          </button>
        </div>

        {/* Nav Menu */}
        <ul
          id="mobile-menu"
          className={`lg:flex font-medium text-lg transition-all duration-300 ${
            isOpen
              ? `fixed top-0 right-0 w-2/6 h-screen flex flex-col justify-center items-center space-y-12 px-6 z-40 ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-300 text-gray-800"
                }`
              : "hidden"
          } lg:relative lg:flex-row lg:space-y-0 lg:space-x-8 lg:py-0 lg:px-0 lg:bg-transparent`}
        >
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.id}
                  className="relative transition duration-300"
                  onClick={() => setIsOpen(false)}
                  aria-current={activeNavItem === item.id ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-0 w-full h-[2px] transition-transform duration-300 origin-left bg-gray-400
                      ${activeNavItem === item.id ? "scale-x-100" : "scale-x-0"} 
                      group-hover:scale-x-100`}
                  />
                </Link>
              </motion.div>
            </li>
          ))}

          {/* Theme Toggle (Desktop) */}
          <li className="hidden lg:flex">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <BsMoon size={20} /> : <BsSun size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

