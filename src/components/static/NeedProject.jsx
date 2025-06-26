import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function NeedProject() {
  return (
    <section className="mt-20 w-full bg-[var(--gray-color)] relative">
      <div className="flex flex-col md:flex-row items-center justify-evenly p-20">
        <div className="flex-1">
          <div className="relative ml-16 before:content-[''] before:absolute before:left-[-4.5rem] before:top-1/2 before:w-16 before:h-1 before:bg-[var(--main-color)] before:translate-y-[-50%]">
            <span className="text-xl font-bold text-[var(--main-color)] capitalize ">
              need project ?
            </span>
          </div>
          <h1 className="text-5xl  text-white capitalize py-8 border-b-2 border-[#777]">
            let's work together <br /> fixed a meeting
          </h1>
          <div className="mt-8">
            <div className="flex items-center py-8 gap-8 border-b-2 border-[#777]">
              <div className="bg-[var(--main-color)] w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h6 className="text-gray-400 capitalize text-lg pb-4">email</h6>
                <a
                  href="mailto:omergehad593@gmail.com"
                  className="text-white hover:text-[var(--main-color)] transition"
                >
                  omergehad593@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center py-8 gap-8 border-b-2 border-[#777]">
              <div className="bg-[var(--main-color)] w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                <FaPhone />
              </div>
              <div>
                <h6 className="text-gray-400 capitalize text-lg pb-4">phone</h6>
                <a
                  href="tel:01061989116"
                  className="text-white hover:text-[var(--main-color)] transition"
                >
                  +20 01061989116
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center items-center hidden lg:flex">
          <img
            src="./project-need.png"
            alt="customer service img"
            className="max-w-[450px] lg:block hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default NeedProject;
