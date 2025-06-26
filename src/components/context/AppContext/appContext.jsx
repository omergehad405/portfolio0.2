import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [skills] = useState([
    {
      id: 1,
      name: "HTML5",
      img: "./skils/HTML5.png",
      alt: "Html5",
      dataName: "html5",
    },
    {
      id: 2,
      name: "CSS 3",
      img: "./skils/CSS3.png",
      alt: "css3",
      dataName: "css 3",
    },
    {
      id: 3,
      name: "JavaScript",
      img: "./skils/JavaScript.png",
      alt: "java script",
      dataName: "java script",
    },
    {
      id: 4,
      name: "Bootstrap",
      img: "./skils/Bootstrap.png",
      alt: "bootstrap css",
      dataName: "bootstrap",
    },
    {
      id: 5,
      name: "SCSS",
      img: "./skils/Sass.png",
      alt: "scss",
      dataName: "scss",
    },
    {
      id: 6,
      name: "React JS",
      img: "./skils/React.png",
      alt: "react js",
      dataName: "react JS",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      img: "./tailwind.svg",
      alt: "tailwind css",
      dataName: "tailwind css",
    },
  ]);

  return <AppContext.Provider value={{ skills }}>{children}</AppContext.Provider>;
};

export default AppContext;
