import React, { useState, useRef, useEffect } from "react";
import useProjectsContext from "../../context/ProjectsContext/useProjectsContext";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Landing Page", value: "landing page" },
  { label: "Ecommerce", value: "e-commerce" },
  { label: "FullStack", value: "fullStack" },
];

function Projects() {
  const { projects } = useProjectsContext();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const projectRefs = useRef([]);

  useEffect(() => {
    // Clean up previous triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    projectRefs.current.forEach((el, idx) => {
      if (!el) return;
      // Even index: animate from left, Odd index: animate from right
      const fromX = idx % 2 === 0 ? -100 : 100;
      gsap.fromTo(
        el,
        { autoAlpha: 0, x: fromX },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selectedFilter, projects]);

  const filterProjects = (projects, filter) => {
    if (filter === "all") return projects;
    // For "ecommerce" filter, match "e-commerce" in data
    if (filter === "e-commerce") {
      return projects.filter(
        (project) =>
          project.category &&
          project.category.toLowerCase().replace(/\s/g, "") === "e-commerce"
      );
    }
    // For "fullStack" filter, match "fullstack" in data (case-insensitive, no space)
    if (filter === "fullStack") {
      return projects.filter(
        (project) =>
          project.category &&
          project.category.toLowerCase().replace(/\s/g, "") === "fullstack"
      );
    }
    // For "landing page" filter
    return projects.filter(
      (project) =>
        project.category &&
        project.category.toLowerCase() === filter.toLowerCase()
    );
  };

  const filteredProjects = filterProjects(projects, selectedFilter);

  useEffect(() => {
    projectRefs.current = [];
  }, [filteredProjects]);

  return (
    <section className="w-[80%] mx-auto mb-10 overflow-hidden">
      <div className="relative my-10 text-center">
        <h1 className="text-4xl font-bold text-white capitalize pl-3">
          My Projects
        </h1>
        <p className="text-lg leading-[1.5] mt-5 text-[#777]">
          Welcome to my Projects Page, Here you can see all my projects
        </p>
        <button className="bg-[var(--main-color)] text-white px-4 py-2 rounded-md block w-fit mx-auto my-5 hover:bg-[var(--main-color-hover)] cursor-pointer border border-[var(--main-color)] hover:border hover:border-[var(--white-color)] transition-all duration-300">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2"
          >
            Hire Me <FaArrowRight />
          </Link>
        </button>
      </div>

      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            className={`px-4 py-2 rounded-md border transition-all duration-200 cursor-pointer ${
              selectedFilter === filter.value
                ? "bg-[var(--main-color)] text-white border-[var(--main-color)]"
                : "bg-transparent text-white border-gray-500 hover:bg-[var(--main-color)] hover:text-white"
            }`}
            onClick={() => setSelectedFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {filteredProjects.length === 0 ? (
          <div className="text-white text-center w-full py-10">
            There is no projects for this category yet.
          </div>
        ) : (
          filteredProjects.map((project, idx) => (
            <div
              key={project.id || project.title + idx}
              ref={(el) => (projectRefs.current[idx] = el)}
              className="group relative w-[350px] mx-auto xl:w-[450px] h-[150px] xl:h-[200px] my-1 overflow-hidden flex xl:justify-between justify-center xl:gap-0 gap-2 rounded-xl shadow-xl p-2 relative opacity-0"
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
                    {project.stack &&
                      project.stack.map((stack) => stack.name).join(" & ")}
                  </span>
                </div>
              </div>

              <div className="absolute top-0 right-0 hidden group-hover:block bg-black/50 w-full h-full transition-all duration-500">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl cursor-pointer flex items-center justify-center h-full w-full"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;
