import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { PiNumberFiveBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="bg-black text-white p-5">
      <div className="flex flex-wrap justify-between w-[95%] mx-auto">
        <div className="flex flex-col gap-4 max-w-[400px] min-h-[200px]">
          <Link to="/" className="text-5xl font-bold">
            Omar.
          </Link>
          <p className="text-sm text-[#777] leading-[1.5]">
            I am a frontend developer with extensive experience in utilizing web
            technologies to create dynamic, responsive, and user-friendly
            interfaces. With over four years in the industry
          </p>
          <div className="flex items-center gap-1">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/omar-gehad-214302291/"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex items-center justify-center text-[#666] hover:text-[var(--main-color)] text-[22px]"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/omergehad405"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex items-center justify-center text-[#666] hover:text-[var(--main-color)] text-[22px]"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.upwork.com/freelancers/~0131b5cb24cec43395?mp_source=share"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex items-center justify-center text-[#666] hover:text-[var(--main-color)] text-[22px]"
            >
              <FaUpwork />
            </a>
            <a
              target="_blank"
              href="https://khamsat.com/user/omer_gehad"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex items-center justify-center text-[#666] hover:text-[var(--main-color)] text-[22px]"
            >
              <PiNumberFiveBold />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col gap-2 w-[200px] min-h-[200px]">
            <h3 className="text-3xl font-bold ">Links</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="/"
                  className="block text-[#777] transition-all duration-500 hover:text-[var(--main-color)] hover:translate-x-[5px]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-[#777] transition-all duration-500 hover:text-[var(--main-color)] hover:translate-x-[5px]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block text-[#777] transition-all duration-500 hover:text-[var(--main-color)] hover:translate-x-[5px]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="block text-[#777] transition-all duration-500 hover:text-[var(--main-color)] hover:translate-x-[5px]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-[#777] transition-all duration-500 hover:text-[var(--main-color)] hover:translate-x-[5px]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-[250px] min-h-[200px]">
            <h3 className="text-3xl font-bold ">Get in Touch</h3>
            <p className="text-[#777] text-base leading-relaxed text-sm">
              Let's create something amazing together! Ready to start your next
              project? Reach out and let's make it happen.
            </p>
            <Link
              to="/contact"
              className="mt-2 px-6 py-2 rounded-md capitalize font-bold transition-colors duration-200 cursor-pointer bg-[var(--main-color)] text-white border-[var(--main-color)] hover:bg-[var(--second-color)] hover:text-[var(--white-color)] text-center w-fit"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
