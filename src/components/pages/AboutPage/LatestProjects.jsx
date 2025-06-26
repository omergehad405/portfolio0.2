import React, { useState } from "react";
import useProjectsContext from "../../context/ProjectsContext/useProjectsContext";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LatestProjects() {
  const { projects } = useProjectsContext();
  const [activeIndex, setActiveIndex] = useState(null);

  // Helper to detect if device is touch (mobile/tablet)
  const isTouchDevice = () => {
    if (typeof window === "undefined") return false;
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  // Handle click for mobile: toggle overlay for the clicked card
  const handleCardClick = (idx) => {
    if (isTouchDevice()) {
      setActiveIndex((prev) => (prev === idx ? null : idx));
    }
  };

  // Handle mouse leave for desktop: remove overlay if not on mobile
  const handleMouseLeave = () => {
    if (!isTouchDevice()) {
      setActiveIndex(null);
    }
  };

  return (
    <section className="lg:w-[80%] w-[95%] mx-auto mb-10">
      <div className="relative mb-10">
        <h1 className="text-4xl font-bold border-l-5 border-[var(--main-color)] text-white capitalize pl-3">
          Latest Projects
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
        {projects.slice(0, 4).map((project, idx) => (
          <div
            key={project.id}
            className="group relative w-[350px] mx-auto xl:w-[550px] h-[150px] xl:h-[200px] my-1 overflow-hidden flex xl:justify-between justify-center xl:gap-0 gap-2 rounded-xl shadow-xl p-2"
            onClick={() => handleCardClick(idx)}
            onMouseEnter={() => {
              if (!isTouchDevice()) setActiveIndex(idx);
            }}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isTouchDevice() ? "pointer" : "default" }}
          >
            <div className="w-[150px] xl:w-[200px] h-[150px] xl:h-[200px] overflow-hidden">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="py-5 w-[200px]">
              <h1 className="xl:text-2xl text-xl font-bold text-white capitalize mb-1">
                {project.title}
              </h1>
              <p className="xl:text-[12px] text-[10px] leading-[1.5] text-[#777]">
                {project.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="xl:text-[12px] text-[10px] leading-[1.5] text-[var(--main-color)] xl:mt-2 mt-1 capitalize ">
                  {project.stack.map((stack) => stack.name).join(" & ")}
                </span>
              </div>
            </div>

            {/* Overlay: show on hover (desktop) or on click (mobile) for the active card only */}
            {activeIndex === idx && (
              <div className="absolute top-0 right-0 bg-black/50 w-full h-full transition-all duration-500 flex items-center justify-center">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl cursor-pointer flex items-center justify-center h-full w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaArrowRight />
                </a>
              </div>
            )}
            {/* For desktop, also show overlay on hover using group-hover */}
            {!isTouchDevice() && (
              <div className="absolute top-0 right-0 hidden group-hover:flex bg-black/50 w-full h-full transition-all duration-500 items-center justify-center">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl cursor-pointer flex items-center justify-center h-full w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaArrowRight />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="bg-[var(--main-color)] text-white px-4 py-2 rounded-md block w-fit mx-auto my-5 hover:bg-[var(--main-color-hover)] cursor-pointer border border-[var(--main-color)] hover:border hover:border-[var(--white-color)] transition-all duration-300">
        <Link to="/projects" className="flex items-center justify-center gap-2">
          See All Projects <FaArrowRight />
        </Link>
      </button>
    </section>
  );
}

export default LatestProjects;
