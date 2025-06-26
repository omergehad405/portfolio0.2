import React from "react";
import { FaArrowRight } from "react-icons/fa";
const skils = [
  {
    id: 1,
    name: "HTML & CSS",
    image1: "./AboutPage/HTML5.png",
    image2: "./AboutPage/CSS3.png",
    description:
      "Crafting clean, semantic structures and sleek, responsive designs that form the foundation of beautiful, user-friendly websites.",
  },
  {
    id: 2,
    name: "Vanila JavaScript",
    image1: "./AboutPage/JavaScript.png",
    description:
      "Bringing websites to life with interactive, dynamic functionality that enhances user experience and engagement.",
  },
  {
    id: 3,
    name: "Tailwind & Bootstrap",
    image1: "./AboutPage/Tailwind CSS.png",
    image2: "./AboutPage/Bootstrap.png",
    description:
      "Building sleek, responsive interfaces quickly and efficiently with Tailwind’s utility‑first approach and Bootstrap’s robust, tried‑and‑tested components.",
  },
  {
    id: 4,
    name: "SCSS",
    image1: "./AboutPage/Sass.png",
    description:
      "Writing clean, maintainable, and modular styles with SCSS, making it easy to build and scale beautiful, consistent interfaces.",
  },
  {
    id: 5,
    name: "React & Next.js",
    image1: "./AboutPage/React.png",
    image2: "./AboutPage/Next.js.png",
    description:
      "Building modern, high-performance web applications with React for dynamic interfaces and Next.js for seamless routing, server‑side rendering, and optimized site performance.",
  },
  {
    id: 6,
    name: "Git & GitHub",
    image1: "./AboutPage/Git.png",
    image2: "./AboutPage/GitHub.png",
    description:
      " Managing code efficiently with version control and collaboration, ensuring seamless teamwork and a clean, organized workflow.",
  },
  {
    id: 7,
    name: "Strapi CMS",
    image1: "./AboutPage/strapi.png",
    description:
      "Powering flexible, customizable backend APIs with a headless CMS that makes managing and delivering content seamless and efficient.",
  },
];
function SkilsSection() {
  return (
    <section className="w-[80%] mx-auto mb-10">
      <div className="relative mb-10">
        <h1 className="text-4xl font-bold border-l-5 border-[var(--main-color)] text-white capitalize pl-3">
          what i do
        </h1>
        <p className="text-[#777] text-sm my-5 w-full lg:w-[80%]">
          I have more than 3 years' experience building websites . Below is a
          quick overview of my main technical skill sets and technologies I use.
          Want to find out more about my experience? Check out my{" "}
          <a
            className="text-[var(--main-color)] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/15klEXrhzwAb3XKqh-F_23non6XcIsxf3/view?usp=sharing"
          >
            online resume
          </a>
          .
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {skils.map((skill) => (
          <div
            key={skill.id}
            className="w-[250px] min-h-[200px] rounded-lg shadow-xl p-2"
          >
            <div className="flex items-center gap-2">
              {skill.image2 ? (
                <>
                  <img
                    src={skill.image1}
                    alt="skill1 image"
                    className="w-[30px]"
                  />
                  <img
                    src={skill.image2}
                    alt="skill2 image"
                    className="w-[30px]"
                  />
                </>
              ) : (
                <img
                  src={skill.image1}
                  alt="skill image"
                  className="w-[30px]"
                />
              )}
            </div>
            <h1 className="text-lg font-bold text-white my-2">{skill.name}</h1>
            <p className="text-[12px] leading-[1.5] text-[#777]">
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      <button className="bg-[var(--main-color)] text-white px-4 py-2 rounded-md block w-fit mx-auto my-5 hover:bg-[var(--main-color-hover)] cursor-pointer border border-[var(--main-color)] hover:border hover:border-[var(--white-color)] transition-all duration-300">
        <a href="/services" className="flex items-center justify-center gap-2">
          Services & Pricing <FaArrowRight />
        </a>
      </button>
    </section>
  );
}

export default SkilsSection;
