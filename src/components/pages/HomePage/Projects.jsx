import React, { useEffect } from "react";
import useProjectsContext from "../../context/ProjectsContext/useProjectsContext";
import { FaArrowUp, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavButtons from "../../static/SwiperNavButtons";
import "swiper/css";
import { Link } from "react-router-dom";

function Projects() {
  const { projects, setProject } = useProjectsContext();
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-12 px-4 md:px-16">
      <div className="mb-8 text-center ">
        <span className="uppercase tracking-widest text-lg font-bold text-[var(--main-color)] relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-20 after:w-[70px] after:h-[3px] after:bg-[var(--main-color)] before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-20 before:w-[70px] before:h-[3px] before:bg-[var(--main-color)]">
          Latest Projects
        </span>
      </div>

      <div className="flex flex-col items-center gap-8 lg:w-[80%] w-[95%] mx-auto bg-[var(--gray-color)] rounded-xl shadow p-6">
        <Swiper
          className="w-full"
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        >
          {projects.slice(0, 3).map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <h1 className="text-5xl text-white font-bold ">
                    {project.num}
                  </h1>
                  <span className="text-5xl text-white capitalize">
                    {project.title}
                  </span>
                  <p className="text-[#777] py-4">{project.description}</p>
                  <ul className="flex gap-4 text-primary capitalize text-lg border-b-2 border-[var(--main-color)] pb-4">
                    {project.stack.map((item, idx) => {
                      return (
                        <li className="text-[var(--main-color)]" key={idx}>
                          {item.name},
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex gap-8 mt-8">
                    {project.github ? (
                      <a
                        target="_blank"
                        href={project.github}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-white text-xl hover:bg-primary hover:text-black transition"
                      >
                        <FaGithub />
                      </a>
                    ) : null}
                    <a
                      target="_blank"
                      href={project.live}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-white text-xl hover:bg-primary hover:text-black transition"
                    >
                      <FaArrowUp />
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[300px] md:h-[400px] w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Link
          to="/projects"
          className="px-6 py-2 rounded-md capitalize font-bold transition-colors duration-200 cursor-pointer bg-[var(--main-color)] text-white border-[var(--main-color)]"
        >
          view all projects
        </Link>
      </div>
    </section>
  );
}

export default Projects;
