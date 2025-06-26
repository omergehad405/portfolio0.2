import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const packages = [
  {
    name: "Basic",
    price: "$30",
    details:
      "A clean, responsive website with a basic landing page (4 sections) or a simple site with 2 pages. Perfect for starting your online presence quickly and effectively.",
    delivery: "3-5 days",
    responsive: true,
    custom: false,
    support: "-",
    seo: "-",
    revisions: "1 Revisions",
    mailSubject: "Interested in your Basic services",
    bookNow: true,
  },
  {
    name: "Standard",
    price: "$80",
    details:
      "A polished website with at most 7 pages, smooth animations, an interactive contact form, and basic SEO optimization.",
    delivery: "14 days",
    responsive: true,
    custom: false,
    support: "1 week of support",
    seo: "SEO optimization",
    revisions: "2 Revisions",
    mailSubject: "Interested in your Standard services",
    bookNow: true,
  },
  {
    name: "Premium",
    price: "$150",
    details:
      "A fully featured website with custom design elements, advanced animations, interactive features, and optimized SEO for maximum performance.",
    delivery: "2-3 month(s)",
    responsive: true,
    custom: true,
    support: "2 month of support",
    seo: "Full SEO optimization",
    revisions: "5+ Revisions",
    mailSubject: "Interested in your Premium services",
    bookNow: true,
  },
];

const features = [
  {
    label: "Package Price",
    key: "price",
  },
  {
    label: "Details",
    key: "details",
  },
  {
    label: "Delivery Time",
    key: "delivery",
  },
  {
    label: "Responsive design",
    key: "responsive",
    render: (val) => (val ? <FaCheck className="block w-fit mx-auto" /> : "-"),
  },
  {
    label: "Custom design",
    key: "custom",
    render: (val) => (val ? <FaCheck className="block w-fit mx-auto" /> : "-"),
  },
  {
    label: "Post‑delivery support",
    key: "support",
  },
  {
    label: "SEO optimization",
    key: "seo",
  },
  {
    label: "Revisions",
    key: "revisions",
  },
];

function Services() {
  return (
    <section className="lg:w-[80%] w-[95%] mx-auto mb-10">
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

      <div className="flex flex-col gap-10 mt-20 lg:w-[80%] w-full mx-auto">
        <h1 className="text-3xl font-bold text-white text-center capitalize">
          Service Packages
        </h1>

        <div className="w-full overflow-x-auto hidden md:block">
          <table className="min-w-[700px] w-full">
            <thead>
              <tr>
                <th className="text-center bg-[#666] text-[var(--main-color)] py-5 border border-[#eee] capitalize"></th>
                {packages.map((pkg) => (
                  <th
                    key={pkg.name}
                    className="text-center bg-[#666] text-[var(--main-color)] py-5 border border-[#eee] capitalize"
                  >
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.label}>
                  <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]">
                    {feature.label}
                  </td>
                  {packages.map((pkg) => (
                    <td
                      key={pkg.name + feature.key}
                      className={`${
                        feature.key === "details"
                          ? "lg:text-[13px] text-[11px] leading-[1.7] text-left p-2 font-bold"
                          : "text-center font-bold"
                      } bg-[var(--gray-color)] text-white border border-[#777] py-5 w-[200px] h-auto`}
                    >
                      {feature.render ? (
                        feature.render(pkg[feature.key])
                      ) : feature.key === "details" ? (
                        <p className="h-[100px] text-[#777]">
                          {pkg[feature.key]}
                        </p>
                      ) : (
                        <span
                          className={
                            feature.key === "details" ? "text-[#777]" : ""
                          }
                        >
                          {pkg[feature.key]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="bg-[#666] text-white text-center font-bold border border-[#fff] w-[250px]"></td>
                {packages.map((pkg) => (
                  <td
                    key={pkg.name + "book"}
                    className="bg-[var(--gray-color)] text-white border border-[#777] py-5 text-center font-bold w-[200px] h-auto"
                  >
                    {pkg.bookNow && (
                      <a
                        href={`mailto:omergehad593@gmail.com?subject=${encodeURIComponent(
                          pkg.mailSubject
                        )}`}
                        className="w-[250px] py-2 px-3 bg-[var(--main-color)] rounded-sm inline-block"
                      >
                        Book Now
                      </a>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-8 md:hidden">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-[var(--gray-color)] rounded-lg shadow-lg p-5 text-white"
            >
              <h2 className="text-2xl font-bold text-center mb-2 text-[var(--main-color)]">
                {pkg.name}
              </h2>
              <div className="flex justify-center mb-2">
                <span className="text-2xl font-bold">{pkg.price}</span>
              </div>
              <div className="mb-2">
                <span className="block text-sm text-[#aaa] font-bold mb-1">
                  Details
                </span>
                <p className="text-[13px] text-[#bbb]">{pkg.details}</p>
              </div>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="font-bold text-[#aaa]">Delivery Time: </span>
                  <span>{pkg.delivery}</span>
                </li>
                <li>
                  <span className="font-bold text-[#aaa]">
                    Responsive design:{" "}
                  </span>
                  {pkg.responsive ? (
                    <FaCheck className="inline-block text-[var(--main-color)] ml-1" />
                  ) : (
                    "-"
                  )}
                </li>
                <li>
                  <span className="font-bold text-[#aaa]">Custom design: </span>
                  {pkg.custom ? (
                    <FaCheck className="inline-block text-[var(--main-color)] ml-1" />
                  ) : (
                    "-"
                  )}
                </li>
                <li>
                  <span className="font-bold text-[#aaa]">
                    Post‑delivery support:{" "}
                  </span>
                  <span>{pkg.support}</span>
                </li>
                <li>
                  <span className="font-bold text-[#aaa]">
                    SEO optimization:{" "}
                  </span>
                  <span>{pkg.seo}</span>
                </li>
                <li>
                  <span className="font-bold text-[#aaa]">Revisions: </span>
                  <span>{pkg.revisions}</span>
                </li>
              </ul>
              <div className="mt-4 flex justify-center">
                <a
                  href={`mailto:omergehad593@gmail.com?subject=${encodeURIComponent(
                    pkg.mailSubject
                  )}`}
                  className="w-full text-center py-2 px-3 bg-[var(--main-color)] rounded-sm font-bold"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
