import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="lg:w-[80%] w-[90%] mx-auto mb-10 lg:mt-20">
      <div className="relative my-10">
        <h1 className="text-4xl font-bold text-center text-white capitalize pl-3">
          Contact
        </h1>
        <p className="text-[14px] text-center lg:w-[80%] w-[90%] mx-auto leading-[1.5] mt-5 text-[#777]">
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to
          <a
            href="mailto:omergehad593@gmail.com"
            className="text-[var(--main-color)] pl-2"
          >
            omergehad593@gmail.com
          </a>
        </p>
        <div>
          <p className="text-[14px] text-center w-[80%] mx-auto leading-[1.5] mt-5 text-[#777]">
            Want to get connected? Follow me on the social channels below.
          </p>
          <div className="flex items-center gap-4 mt-5 justify-center">
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
              <img src="/public/khamsat.png" alt="Khamsat" />
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export default Contact;
