import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div
      className={`py-16 px-8 transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mt-20 text-center">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold  mt-10">Get to know me!</h3>
            <p className="text-xl text-justify">
              Hello, I'm <span className="font-semibold">Sehrish Tanveer</span>,
              a highly motivated Software Engineering graduate with a keen
              interest in web development. My expertise spans both front-end and
              back-end technologies. I specialize in modern technologies like
              ReactJS, NextJS, and Node.js, along with UI frameworks such as
              Material UI, TailwindCSS, Bootstrap, and ShadCN. My skill set
              extends to database management with MongoDB, API integration using
              POSTMAN, JWT Authentication, and implementing real-time
              communication with Socket.io. I am proficient in utilizing local
              storage, session storage, and web sockets, ensuring optimal data
              flow and application performance. I focus on creating clean,
              responsive designs that adapt seamlessly to any device.
              Additionally, I have hands-on experience with Fetch vs Axios for
              data fetching and use ShadCN Form Builder for rapid form creation.
              <br />
              When not coding, I enjoy reading and staying up to date with the
              latest tech trends.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-5 justify-center md:justify-normal whitespace-nowrap items-center">
              <Button
                text="View Projects"
                styleType="primary"
                onClick={() => handleNavigate("/projects")}
                className="w-60 sm:w-56"
              />
              <a
                href="/SehrishTanveer_SoftwareEngineer.pdf"
                className="w-60 sm:w-64"
              >
                <Button
                  text="Download Resume"
                  styleType="secondary"
                  className="w-full"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mt-10 mb-4">Skills</h3>

            {/* Languages */}
            <h4 className="text-2xl font-semibold mb-4">Languages</h4>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-300 rounded-full flex items-center justify-center py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                  alt="HTML5"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  HTML
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2 ">
                <img
                  src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                  alt="CSS"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  CSS
                </p>
              </div>

              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                  alt="JavaScript"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  JavaScript
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                  alt="Python"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Python
                </p>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <h4 className="text-2xl font-semibold mb-4">
              Frameworks & Libraries
            </h4>
            <div className="grid  grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                  alt="ReactJS"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  ReactJS
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                  alt="NextJS"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  NextJS
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                  alt="NodeJS"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  NodeJS
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                  alt="ExpressJS"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  ExpressJS
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                  alt="Bootstrap"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Bootstrap
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="TailwindCSS"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  TailwindCSS
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
                  alt="Material UI"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Material UI
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
                  alt="FramerMotion"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  FramerMotion
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  id="jquery"
                  className="w-8 h-8 mx-2"
                >
                  <path
                    fill="#0868AC"
                    d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"
                  ></path>
                </svg>
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  JQuery
                </p>
              </div>
            </div>
            {/* Tools & Technologies */}
            <h4 className="text-2xl font-semibold mb-4">
              Tools & Technologies
            </h4>
            <div className="grid  grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="Git"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Git
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  GitHub
                </p>
              </div>

              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                  alt="MongoDB"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  MongoDB
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                  alt="PostgreSQL"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  PostgreSQL
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
                  alt="VS Code"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  VS Code
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="Postman"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Postman
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="Figma"
                  className="w-8 h-8 mx-2"
                />
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Figma
                </p>
              </div>
            </div>
            {/* Soft Skills */}
            <h4 className="text-2xl font-semibold mb-4">Soft Skills</h4>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Teamwork
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Communication
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Problem Solving
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Team Leading
                </p>
              </div>
              <div className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-2">
                <p className="text-gray-800 text-xl font-medium whitespace-nowrap">
                  Critical Thinking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
