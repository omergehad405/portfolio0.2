import React, { useState } from "react";
import { TbExclamationMark } from "react-icons/tb";
import { Link } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pakage: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className=" flex items-center lg:gap-5 gap-0">
      <div>
        <img src="form.png" alt="" className="hidden lg:flex" />
      </div>
      <form className="mt-20 lg:w-[60%] w-full mx-auto bg-black py-2">
        <h1 className="text-2xl font-bold text-center text-white mb-10">
          Get in touch
        </h1>

        <div className="flex flex-wrap items-center gap-5 p-5 rounded-sm w-full">
          <div className="flex flex-col gap-5  lg:w-[48%] w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" bg-[var(--white-color)] rounded-sm p-2 outline-none focus: outline-2 outline-[var(--main-color)]"
            />
          </div>
          <div className="flex flex-col gap-5 lg:w-[48%] w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" bg-[var(--white-color)] rounded-sm p-2 outline-none focus: outline-2 outline-[var(--main-color)]"
            />
          </div>
        </div>

        <div className="p-5 rounded-sm w-full">
          <select
            name="pakage"
            id=""
            className="bg-[var(--white-color)] rounded-sm p-2 w-full outline-none"
            value={formData.pakage}
            onChange={handleChange}
          >
            <option value="">Select Pakage</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        <div className="px-5 w-full">
          <p className="text-white text-sm">
            Want to know what's included in each package? Check the
            <Link to="/services" className="text-[var(--main-color)] pl-2">
              Services & Pricing page.
            </Link>
          </p>
        </div>

        <div className="p-5 rounded-sm w-full">
          <textarea
            name="message"
            id=""
            rows={10}
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-[var(--white-color)] rounded-sm p-2 w-full outline-none"
          ></textarea>
        </div>

        <div className="p-5 rounded-sm w-full">
          <button className="bg-[var(--main-color)] text-white px-4 py-2 rounded-sm w-fit">
            <a
              href={`mailto:omergehad593@gmail.com?subject= name:${formData.name} , Email: ${formData.email} , Pakage: ${formData.pakage} &body=${formData.message}`}
            >
              Send Message
            </a>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
