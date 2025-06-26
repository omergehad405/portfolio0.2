import React, { useEffect } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-secondary lg:h-screen h-[60vh] relative">
      <div className="flex flex-col md:flex-row justify-between items-center relative w-[95%] mx-auto mt-10 md:mt-20">
        <div className="md:flex flex-col items-center gap-40 text-center hidden">
          <div className="flex items-center gap-2 rotate-90 text-white mb-5">
            <FaPhone />
            <a
              href="tel:01061989116"
              className="flex items-center gap-2 text-white"
            >
              <i className="fa-solid fa-phone"></i>
              (+20) 01061989116
            </a>
          </div>
          <div className="flex flex-col items-center gap-20">
            <p className="rotate-90 text-[#666] uppercase text-lg">
              scroll down
            </p>
            <img src="./download.png" alt="scroll down" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row grow-1 items-center justify-center gap-20">
          <div className="flex flex-col gap-10">
            <div className="border-b border-white pb-5 ">
              <a
                target="_blank"
                href="https://khamsat.com/user/omer_gehad"
                className="text-white text-[1.2rem] lg:text-3xl capitalize hover:text-[var(--main-color)] transition relative"
              >
                Currently available for freelance <br /> worldwide
                <FaArrowRight className="ml-2 absolute -right-7 bottom-0.5 -rotate-45" />
              </a>
            </div>
            <div className="flex flex-col items-center text-white ">
              <h1 className="capitalize text-[4rem] lg:text-[5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--main-color)]">
                front end
              </h1>
              <h3 className="capitalize text-[3rem] lg:text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--main-color)]">
                Developer
              </h3>
            </div>
            <button className="border-none rounded bg-[var(--main-color)] cursor-pointer text-white capitalize text-xl px-4 py-2">
              <a href="./Omar-Gehad-CV.pdf" download="Omar-Gehad-CV.pdf">
                download CV
              </a>
            </button>
          </div>
          <img
            src="./home.png"
            alt="my photo"
            className="w-full max-w-[450px] lg:block hidden"
          />
        </div>

        <div className="md:flex flex-col items-center gap-10 text-center hidden">
          <div className="flex flex-col items-center gap-20">
            <p className="rotate-90 text-[#666] uppercase text-lg">follow me</p>
            <img src="./download.png" alt="follow me" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/omar-gehad-214302291/"
              className="bg-[var(--main-color)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/omergehad405"
              className="bg-[var(--main-color)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.upwork.com/freelancers/~0131b5cb24cec43395?mp_source=share"
              className="bg-[var(--main-color)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl"
            >
              <FaUpwork />
            </a>
            <a
              target="_blank"
              href="https://khamsat.com/user/omer_gehad"
              className="bg-[var(--main-color)] text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src="./khamsat.png" alt="Khamsat" className="max-w-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
