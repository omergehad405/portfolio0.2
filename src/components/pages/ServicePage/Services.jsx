import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Services() {
  return (
    <section className="w-[80%] mx-auto mb-10">
      <div className="relative my-10">
        <h1 className="text-4xl font-bold text-center text-white capitalize pl-3">
          Services & Pricing
        </h1>
        <p className="text-[14px] text-center w-[80%] mx-auto leading-[1.5] mt-5 text-[#777]">
          I specialize in crafting visually stunning and highly functional
          websites and web applications. My services are tailored to meet the
          unique needs of each project, ensuring a seamless user experience and
          responsive design.
        </p>
        <p className="text-[14px] text-center w-[80%] mx-auto leading-[1.5] mt-5 text-[#777]">
          I'm currently taking on freelance software development work. You're
          welcome to contact me for a custom quote for your project. I also
          offer development service packages with fixed pricing.
        </p>
      </div>

      <div className="flex flex-col gap-10 mt-20 w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-white text-center capitalize">
          Service Packages
        </h1>
        <table>
          <thead>
            <tr>
              <th className="text-center bg-[#666]  text-[var(--main-color)] py-5 border border-[#eee] capitalize"></th>
              <th className="text-center bg-[#666]  text-[var(--main-color)] py-5 border border-[#eee] capitalize">
                Basic
              </th>
              <th className="text-center bg-[#666]  text-[var(--main-color)] py-5 border border-[#eee] capitalize">
                Standard
              </th>
              <th className="text-center bg-[#666]  text-[var(--main-color)] py-5 border border-[#eee] capitalize">
                Premium
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                Package Price
              </td>
              <td className="text-2xl bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                $30
              </td>
              <td className="text-2xl bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                $80
              </td>
              <td className="text-2xl bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                $150
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                Details
              </td>
              <td className="text-[11px] leading-[1.5] text-left bg-[var(--gray-color)] text-[#777] border border-[#777] py-2 px-2 font-bold w-[200px]">
                <p className="h-[100px] w-[190px]">
                  A clean, responsive website with a basic landing page (4
                  sections) or a simple site with 2 pages. Perfect for starting
                  your online presence quickly and effectively.
                </p>
              </td>
              <td className="text-[11px] leading-[1.5] text-left bg-[var(--gray-color)] text-[#777] border border-[#777] py-2 px-2 font-bold w-[200px]">
                <p className="h-[100px] w-[190px]">
                  A polished website with at most 7 pages, smooth animations, an
                  interactive contact form, and basic SEO optimization.
                </p>
              </td>
              <td className="text-[11px] leading-[1.5] text-left bg-[var(--gray-color)] text-[#777] border border-[#777] py-2 px-2 font-bold w-[200px]">
                <p className="h-[100px] w-[190px]">
                  A fully featured website with custom design elements, advanced
                  animations, interactive features, and optimized SEO for
                  maximum performance.
                </p>
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                Delivery Time
              </td>
              <td className="text-center bg-[var(--gray-color)] text-[var(--white-color)] border border-[#777] py-2 px-2 font-bold w-[200px]">
                3-5 days
              </td>
              <td className="text-center bg-[var(--gray-color)] text-[var(--white-color)] border border-[#777] py-2 px-2 font-bold w-[200px]">
                14 days
              </td>
              <td className="text-center bg-[var(--gray-color)] text-[var(--white-color)] border border-[#777] py-2 px-2 font-bold w-[200px]">
                2-3 month(s)
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                Responsive design
              </td>
              <td className=" bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                <FaCheck className="block w-fit mx-auto" />
              </td>
              <td className=" bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                <FaCheck className="block w-fit mx-auto" />
              </td>
              <td className=" bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                <FaCheck className="block w-fit mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                Custom design
              </td>
              <td className=" bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                -
              </td>
              <td className=" bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                -
              </td>
              <td className=" bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                <FaCheck className="block w-fit mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                Post‑delivery support
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                -
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                1 week of support
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                2 month of support
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                SEO optimization
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                -
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                SEO optimization
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                Full SEO optimization
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                Revisions
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                1 Revisions
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                2 Revisions
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                5+ Revisions
              </td>
            </tr>
            <tr>
              <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]"></td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                <a
                  href="mailto:omergehad593@gmail.com?subject=Interested in your Basic services"
                  className="w-[250px] py-2 px-3 bg-[var(--main-color)] rounded-sm"
                >
                  Book Now
                </a>
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                <a
                  href="mailto:omergehad593@gmail.com?subject=Interested in your Standard services"
                  className="w-[250px] py-2 px-3 bg-[var(--main-color)] rounded-sm"
                >
                  Book Now
                </a>
              </td>
              <td className="bg-[var(--gray-color)] text-white border border-[#777] py-5  text-center font-bold w-[200px] h-auto">
                <a
                  href="mailto:omergehad593@gmail.com?subject=Interested in your Premium services"
                  className="w-[250px] py-2 px-3 bg-[var(--main-color)] rounded-sm"
                >
                  Book Now
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Services;
