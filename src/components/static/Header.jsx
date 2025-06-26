import React, { useState } from "react";
import { FaArrowRight, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork, FaXmark } from "react-icons/fa6";
import { PiNumberFiveBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Header() {
  const [openInfo, setOpenInfo] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleInfo = () => {
    setOpenInfo(!openInfo);
  };
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  // Handler to close nav when a menu item is clicked (for mobile)
  const handleNavItemClick = () => {
    setOpenNav(false);
  };

  return (
    <header className="h-[100px] w-full lg:px-[50px] px-2 bg-black border-b border-[#777] relative">
      <div className="lg:flex justify-between items-center gap-4 hidden">
        <Link
          to="/"
          className="border-r border-[#777] pr-10 h-[100px] flex items-center font-bold text-5xl text-[var(--white-color)] "
        >
          Omar.
        </Link>
        <ul className="flex items-center gap-10">
          <li className="group">
            <Link
              to="/"
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              to="/about"
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              About
            </Link>
          </li>
          <li className="group">
            <Link
              to="/projects"
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Projects
            </Link>
          </li>
          <li className="group">
            <Link
              to="/services"
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Services
            </Link>
          </li>
          <li className="group">
            <Link
              to="/contact"
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleInfo}
          className="text-2xl text-[var(--white-color)] cursor-pointer transition-colors duration-500 group-hover:text-[var(--main-color)] border-l border-[#777] pl-10 h-[100px] flex items-center "
        >
          <FaBars />
        </button>
        <div
          className={`items-center gap-4 absolute top-0 min-h-screen w-[300px] bg-[black] z-50 text-white p-10 ${
            openInfo ? "right-0 flex" : "-right-[300px] hidden"
          }`}
        >
          <div className="relative w-full">
            <button
              onClick={() => setOpenInfo(false)}
              className="text-2xl text-[var(--white-color)] cursor-pointer hover:text-[var(--second-color)] transition-colors duration-500 absolute -top-10 -right-5 bg-[var(--main-color)] p-2"
            >
              <FaXmark />
            </button>
            <div>
              <span className="text-4xl capitalize font-bold pb-5 block">
                omar
              </span>
              <p className="text-sm text-[#777] pb-5">
                I am a frontend developer with extensive experience in utilizing
                web technologies to create dynamic, responsive, and
                user-friendly interfaces. With over four years in the industry
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <h5 className="font-bold uppercase text-[#777777] pb-1">
                    email
                  </h5>
                  <a
                    href="mailto:omergehad593@gmail.com"
                    className="hover:text-[var(--main-color)] transition-color duration-500"
                  >
                    omergehad593@gmail.com
                  </a>
                </div>
                <div>
                  <h5 className="font-bold uppercase text-[#777777] pb-1">
                    call now
                  </h5>
                  <a
                    href="tel:01061989116"
                    className="hover:text-[var(--main-color)] transition-color duration-500"
                  >
                    +20 01061989116
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/omar-gehad-214302291/"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/omergehad405"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <FaGithub />
                </a>
                <a
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~0131b5cb24cec43395?mp_source=share"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <FaUpwork />
                </a>
                <a
                  target="_blank"
                  href="https://khamsat.com/user/omer_gehad"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <PiNumberFiveBold />
                </a>
              </div>
              <div className="mt-10">
                <button className="bg-[var(--main-color)] text-white px-4 py-2 rounded-md w-full hover:bg-[var(--second-color)] transition-colors duration-500 cursor-pointer group">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 justify-center capitalize text-2xl text-[var(--gray-color)] group-hover:text-[var(--white-color)] transition-colors duration-500"
                  >
                    lets talk <FaArrowRight />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden justify-between items-center gap-4 flex">
        <Link
          to="/"
          className="border-r border-[#777] pr-5 h-[100px] flex items-center font-bold text-4xl text-[var(--white-color)] "
        >
          Omar.
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleInfo}
            className="text-2xl text-[var(--white-color)] cursor-pointer transition-colors duration-500 group-hover:text-[var(--main-color)] flex items-center justify-center rounded-sm bg-[var(--white-color)] text-black w-[30px] h-[30px]"
          >
            <FaBars />
          </button>
          <button
            onClick={toggleNav}
            className="text-2xl text-[var(--white-color)] cursor-pointer transition-colors duration-500 group-hover:text-[var(--main-color)] flex items-center justify-center "
          >
            {openNav ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`flex-col items-center gap-10 absolute top-full min-h-screen w-full bg-[black] z-50 text-white p-10 transition-all duration-500 ${
            openNav ? "left-0 flex" : "-left-[300px] hidden"
          }`}
        >
          <li className="group">
            <Link
              to="/"
              onClick={handleNavItemClick}
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              to="/about"
              onClick={handleNavItemClick}
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              About
            </Link>
          </li>
          <li className="group">
            <Link
              to="/projects"
              onClick={handleNavItemClick}
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Projects
            </Link>
          </li>
          <li className="group">
            <Link
              to="/services"
              onClick={handleNavItemClick}
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Services
            </Link>
          </li>
          <li className="group">
            <Link
              to="/contact"
              onClick={handleNavItemClick}
              className="text-2xl text-[var(--white-color)] transition-colors duration-500 group-hover:text-[var(--main-color)]"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div
          className={`items-center gap-4 absolute top-full min-h-screen w-full bg-[black] z-50 text-white p-10 ${
            openInfo ? "right-0 flex" : "-right-[300px] hidden"
          }`}
        >
          <div className="relative w-full">
            <button
              onClick={() => setOpenInfo(false)}
              className="text-2xl text-[var(--white-color)] cursor-pointer hover:text-[var(--second-color)] transition-colors duration-500 absolute -top-10 -right-5 bg-[var(--main-color)] p-2"
            >
              <FaXmark />
            </button>
            <div>
              <span className="text-4xl capitalize font-bold pb-5 block">
                omar
              </span>
              <p className="text-sm text-[#777] pb-5">
                I am a frontend developer with extensive experience in utilizing
                web technologies to create dynamic, responsive, and
                user-friendly interfaces. With over four years in the industry
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <h5 className="font-bold uppercase text-[#777777] pb-1">
                    email
                  </h5>
                  <a
                    href="mailto:omergehad593@gmail.com"
                    className="hover:text-[var(--main-color)] transition-color duration-500"
                  >
                    omergehad593@gmail.com
                  </a>
                </div>
                <div>
                  <h5 className="font-bold uppercase text-[#777777] pb-1">
                    call now
                  </h5>
                  <a
                    href="tel:01061989116"
                    className="hover:text-[var(--main-color)] transition-color duration-500"
                  >
                    +20 01061989116
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-10">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/omar-gehad-214302291/"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <FaLinkedin />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/omergehad405"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <FaGithub />
                </a>
                <a
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~0131b5cb24cec43395?mp_source=share"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <FaUpwork />
                </a>
                <a
                  target="_blank"
                  href="https://khamsat.com/user/omer_gehad"
                  rel="noopener noreferrer"
                  className="w-[40px] h-[40px] rounded-full bg-[var(--main-color)] flex items-center justify-center text-[#666] text-[22px]"
                >
                  <PiNumberFiveBold />
                </a>
              </div>
              <div className="mt-10">
                <button className="bg-[var(--main-color)] text-white px-4 py-2 rounded-md w-full hover:bg-[var(--second-color)] transition-colors duration-500 cursor-pointer group">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 justify-center capitalize text-2xl text-[var(--gray-color)] group-hover:text-[var(--white-color)] transition-colors duration-500"
                  >
                    lets talk <FaArrowRight />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
