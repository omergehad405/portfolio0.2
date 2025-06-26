import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import useAppContext from "../../context/AppContext/useAppContext";
import { PiNumberFiveBold } from "react-icons/pi";
function About() {
  const [section, setSection] = useState("about");
  const sectionBtnsRef = useRef([]);
  const { skills } = useAppContext();
  let sectionBtn = sectionBtnsRef.current;

  useEffect(() => {
    const handleClick = (e) => {
      const newSection = e.target.dataset.section;
      setSection(newSection);
    };

    if (sectionBtn.length > 0) {
      sectionBtn.forEach((btn) => {
        if (btn) {
          btn.addEventListener("click", handleClick);
        }
      });
    }

    return () => {
      sectionBtn.forEach((btn) => {
        if (btn) {
          btn.removeEventListener("click", handleClick);
        }
      });
    };
  });

  return (
    <section className="py-12 px-4 md:px-16">
      <div className="mb-8 text-center ">
        <span className="uppercase tracking-widest text-lg font-bold text-[var(--main-color)] relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-20 after:w-[70px] after:h-[3px] after:bg-[var(--main-color)] before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-20 before:w-[70px] before:h-[3px] before:bg-[var(--main-color)]">
          about me
        </span>
      </div>
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-md capitalize font-bold transition-colors duration-200 cursor-pointer ${
            section === "about"
              ? "bg-[var(--main-color)] text-white border-[var(--main-color)]"
              : "bg-[var(--white-color)] text-black border-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white"
          }`}
          data-section="about"
          ref={(el) => (sectionBtnsRef.current[0] = el)}
        >
          about me
        </button>
        <button
          className={`px-6 py-2 rounded-md capitalize font-bold transition-colors duration-200 cursor-pointer ${
            section === "skils"
              ? "bg-[var(--main-color)] text-white border-[var(--main-color)]"
              : "bg-[var(--white-color)] text-black border-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white"
          }`}
          data-section="skils"
          ref={(el) => (sectionBtnsRef.current[1] = el)}
        >
          skils
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-[80%] mx-auto bg-[var(--gray-color)] rounded-xl shadow p-6">
        <img
          src="./personal-info.png"
          className="w-[400px] max-w-full xl:block hidden"
          alt="Personal Info"
        />
        {section === "about" && (
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2 text-white capitalize">
              personal info
            </h1>
            <p className="my-6 text-sm/7 text-[#777]">
              I am a frontend developer with extensive experience in utilizing
              web technologies to create dynamic, responsive, and user-friendly
              interfaces. With over four years in the industry, I have honed my
              skills in HTML, CSS, JavaScript, and React JS, enabling me to
              build clean, well-structured code and deliver high-quality web
              applications.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="bg-[#2E2E2E] p-5 rounded-md w-[240px] h-[100px]">
                <h6 className="text-lg text-[#777] capitalize font-bold mb-2">
                  email
                </h6>
                <a
                  href="mailto:omergehad593@gmail.com"
                  className="text-white hover:text-[var(--main-color)]"
                >
                  omergehad593@gmail.com
                </a>
              </div>
              <div className="bg-[#2E2E2E] p-5 rounded-md w-[240px] h-[100px]">
                <h6 className="text-lg text-[#777] capitalize font-bold ">
                  phone
                </h6>
                <a
                  href="tel:01061989116"
                  className="text-white hover:text-[var(--main-color)]"
                >
                  +20 01061989116
                </a>
              </div>
              <div className="bg-[#2E2E2E] p-5 rounded-md w-[240px] h-[100px]">
                <h6 className="text-lg text-[#777] capitalize font-bold ">
                  location
                </h6>
                <span className="text-white">cairo , shubra</span>
              </div>
              <div className="bg-[#2E2E2E] p-5 rounded-md w-[240px] h-[100px] flex items-center gap-4">
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
            </div>
          </div>
        )}
        {section === "skils" && (
          <div className="flex-1 flex flex-wrap items-center justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="relative group flex flex-col items-center justify-center w-[150px] h-[150px] bg-[#2E2E2E] cursor-pointer overflow-visible"
                data-name={skill.dataName}
              >
                {/* Tooltip */}
                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    opacity-0
                    group-hover:opacity-100
                    group-hover:-translate-y-1  
                    transition-all
                    duration-300
                    bg-[var(--main-color)]
                    text-white
                    text-xs
                    px-3
                    py-1
                    rounded
                    pointer-events-none
                    z-10
                    whitespace-nowrap
                    shadow-lg
                  "
                >
                  {skill.name}
                </div>
                {/* Skill Image */}
                <img
                  src={skill.img}
                  alt={skill.alt}
                  className="w-12 h-12 filter grayscale group-hover:filter-none transition-all duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
