import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section>
      <div className="w-[80%] mx-auto min-h-[80vh] flex flex-wrap-reverse items-center justify-between gap-10 lg:my-0 my-10 ">
        <div className="flex flex-col gap-2 lg:w-[45%] w-[90%] mx-auto">
          <h1 className="text-5xl font-bold text-white">Omar Gehad</h1>
          <h3 className="text-2xl capitalize text-[#eee]">
            front-end developer
          </h3>
          <p className="text-sm text-[#777] my-5">
            I am a frontend developer with extensive experience in utilizing web
            technologies to create dynamic, responsive, and user-friendly
            interfaces. With over 3 years in the industry
          </p>
          <div className="flex items-center gap-2">
            <button className="border-none rounded bg-black cursor-pointer text-[var(--white-color)] capitalize text-xl px-4 py-2">
              <Link to="/contact">Contact Me</Link>
            </button>

            <button className="border-none rounded bg-[var(--main-color)] cursor-pointer text-white capitalize text-xl px-4 py-2">
              <a href="./Omar-Gehad-CV.pdf" download="Omar-Gehad-CV.pdf">
                View CV
              </a>
            </button>
          </div>
        </div>
        <div className="lg:w-[45%] w-[90%] mx-auto">
          <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-t-full mx-auto overflow-hidden">
            <img
              src="./AboutPage/about.jpg"
              alt="personal image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
