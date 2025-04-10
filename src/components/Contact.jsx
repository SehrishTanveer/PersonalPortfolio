import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mqakeyon", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setMessageSent(true);
          form.reset();
        } else {
          alert("There was an error sending your message. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section
      id="contact-section"
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-200 text-gray-800"
      } py-20 px-6 scroll-mt-20`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mt-20 mb-12">
          <span className="text-xl font-semibold">How can you communicate?</span>
          <h2 className="text-4xl font-bold mt-2">Contact Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
          <div
            className={`${
              theme === "dark"
                ? "bg-gray-700 text-gray-200"
                : "bg-gray-300 text-gray-800"
            } p-8 rounded-lg w-full lg:w-1/2 shadow-lg min-h-[400px]`}
          >
            {messageSent ? (
              <p className="text-lg text-center">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    autoComplete="name"
                    className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 ${
                      theme === "dark"
                        ? "bg-gray-600 text-gray-200 placeholder-gray-400 focus:ring-gray-400"
                        : "bg-gray-200 text-gray-800 placeholder-gray-700 focus:ring-gray-700"
                    }`}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    autoComplete="email"
                    className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 ${
                      theme === "dark"
                        ? "bg-gray-600 text-gray-200 placeholder-gray-400 focus:ring-gray-400"
                        : "bg-gray-200 text-gray-800 placeholder-gray-700 focus:ring-gray-700"
                    }`}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 ${
                      theme === "dark"
                        ? "bg-gray-600 text-gray-200 placeholder-gray-400 focus:ring-gray-400"
                        : "bg-gray-200 text-gray-800 placeholder-gray-700 focus:ring-gray-700"
                    }`}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="7"
                    placeholder="Message"
                    required
                    autoComplete="off"
                    className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 ${
                      theme === "dark"
                        ? "bg-gray-600 text-gray-200 placeholder-gray-400 focus:ring-gray-400"
                        : "bg-gray-200 text-gray-800 placeholder-gray-700 focus:ring-gray-700"
                    }`}
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className={`w-full py-3 font-semibold rounded-md transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-gray-400 text-gray-800 hover:bg-gray-500"
                        : "bg-gray-700 text-gray-200 hover:bg-gray-800"
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-6 w-full lg:w-1/2">
            {[
              {
                icon: faLinkedin,
                label: "LinkedIn",
                link: "https://linkedin.com/in/sehrish-tanveer-500283279",
                text: "sehrish-tanveer-500283279",
              },
              {
                icon: faPaperPlane,
                label: "Email",
                link: "mailto:sehrishtanveer249@gmail.com",
                text: "sehrishtanveer249@gmail.com",
              },
              {
                icon: faGithub,
                label: "GitHub",
                link: "https://github.com/SehrishTanveer",
                text: "SehrishTanveer2002",
              },
              {
                icon: faInstagram,
                label: "Instagram",
                link: "https://instagram.com/sehrish._.tanvir",
                text: "sehrish._.tanvir",
              },
            ].map(({ icon, label, link, text }, index) => (
              <div
                key={index}
                className={`${
                  theme === "dark"
                    ? "bg-gray-700 text-gray-200"
                    : "bg-gray-300 text-gray-800"
                } p-6 rounded-lg shadow-lg`}
              >
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={icon} className="text-2xl" />
                  <p className="w-full sm:w-auto">
                    <span className="font-semibold">{label}:</span>{" "}
                    <a
                      href={link}
                      aria-label={`Visit my ${label}`}
                      className="hover:underline break-words overflow-wrap break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {text}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

