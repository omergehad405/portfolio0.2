import React, { createContext, useState } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      num: "01",
      category: "landing page",
      title: "afaq altareq",
      description:
        "landing page for afaq altareq company which is a company for car rent",
      stack: [{ name: "html 5" }, { name: "css 3" }, { name: "javascript" }],
      image: "./Projects/afaqaltareq.png",
      live: "https://afaqaltariq.sa/",
    },
    {
      num: "02",
      category: "landing page",
      title: "petra mix",
      description:
        "landing page for petra mix company which is a company for ready mix concrete",
      stack: [{ name: "html 5" }, { name: "css 3" }, { name: "javascript" }],
      image: "./Projects/Petra-Mix.png",
      live: "https://landing.petra-mix.com/",
    },
    {
      num: "03",
      category: "e-commerce",
      title: "flower.",
      description: "flower. is a e-commerce website for flower shop ",
      stack: [{ name: "reactJS" }, { name: "scss" }],
      image: "./Projects/flower-shop.png",
      live: "https://omergehad405.github.io/Flower_shop/",
      github: "https://github.com/omergehad405/Flower_shop",
    },
    {
      num: "04",
      category: "landing page",
      title: "Educa.",
      description:
        "this is landing page for Educa. which is a online education website ",
      stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
      image: "./Projects/Educa.png",
      live: "https://omergehad405.github.io/educa/",
      github: "https://github.com/omergehad405/educa",
    },
    {
      num: "05",
      category: "e-commerce",
      title: "shoe.",
      description:
        "this is e-commerce website for shoe shop which is a website for selling shoes",
      stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
      image: "./Projects/shoe-shop.png",
      live: "https://omergehad405.github.io/sheo-website/",
      github: "https://github.com/omergehad405/sheo-website",
    },
    {
      num: "06",
      category: "website",
      title: "kids gaming",
      description:
        "this is full website for kids online games which is a website for kids to search for online games",
      stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
      image: "./Projects/Kids-Gaming.png",
      live: "https://omergehad405.github.io/Kids_Gaming/",
      github: "https://github.com/omergehad405/Kids_Gaming",
    },
    {
      num: "07",
      category: "landing page",
      title: "foods",
      description:
        "this is landing page for foods which is a website for foods",
      stack: [{ name: "react" }, { name: "scss" }],
      image: "./Projects/Foods.png",
      live: "https://omergehad405.github.io/Food/",
      github: "https://github.com/omergehad405/Food",
    },
    {
      num: "08",
      category: "e-commerce",
      title: "CeramicShop",
      description:
        "this is full e-commerce website for CeramicShop which is a website for selling Ceramic products",
      stack: [{ name: "react" }, { name: "tailwind" }],
      image: "./Projects/CeramicShop.png",
      live: "https://omergehad405.github.io/CeramicShop/",
      github: "https://github.com/omergehad405/CeramicShop",
    },
    {
      num: "9",
      category: "fullStack",
      title: "Majdah Samir",
      description:
        "This is a fullstack website for Majdah Samir which is a online thierapist this website to showcase the services and info about her",
      stack: [{ name: "react" }, { name: "tailwind" }, { name: "strapi cms" }],
      image: "./Projects/therapist.png",
      live: "https://omergehad405.github.io/therapist/",
      github: "https://github.com/omergehad405/therapist",
    },
    {
      num: "10",
      category: "fullStack",
      title: "FreshEat",
      description:
        "FreshEat is a fullstack project that allows users to order food online",
      stack: [{ name: "react" }, { name: "tailwind" }, { name: "firebase" }],
      image: "./Projects/freshEat.png",
      live: "https://fresh-heat.vercel.app/",
      github: "https://github.com/omergehad405/FreshHeat",
    },
    {
      num: "11",
      category: "website",
      title: "Agency",
      description: "Next.js Site Template for Agency and Portfolio",
      stack: [{ name: "Next.js" }, { name: "tailwind" }],
      image: "./Projects/Agency.png",
      live: "https://agency-two-lemon.vercel.app/",
      github: "https://github.com/omergehad405/Agency",
    },
  ]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
