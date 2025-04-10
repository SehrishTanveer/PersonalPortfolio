import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Button = ({ text, styleType = "primary", onClick, className = "" }) => {
  const { theme } = useContext(ThemeContext);

  const baseStyle =
    "z-10 py-2 px-6 rounded-full font-semibold text-xl focus:outline-none transition-all duration-300 text-center";

  const styleVariants = {
    light: {
      primary: "bg-gray-800 text-white hover:bg-gray-700",
      secondary:
        "text-gray-600 border-[2.5px] border-gray-800 hover:bg-gray-800 hover:text-white",
    },
    dark: {
      primary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
      secondary:
        "text-gray-300 border-[2.5px] border-gray-300 hover:bg-gray-300 hover:text-gray-800",
    },
  };

  const buttonStyle =
    styleVariants[theme]?.[styleType] || styleVariants.light.primary;

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${buttonStyle} ${className}`}
      aria-label={text}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;

