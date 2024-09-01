import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import styles from "./Work.module.scss";
import SwiperNavButtons from "./SwiperNavButtons";
const projects = [
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
    description: "e-commerce flower shop website ",
    stack: [{ name: "reactJS" }, { name: "scss" }],
    image: "./Projects/flower-shop.png",
    live: "https://omergehad405.github.io/Flower_shop/",
    github: "https://github.com/omergehad405/Flower_shop",
  },
  {
    num: "04",
    category: "landing page",
    title: "Educa.",
    description: "landing page for education website ",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    image: "./Projects/Educa.png",
    live: "https://omergehad405.github.io/educa/",
    github: "https://github.com/omergehad405/educa",
  },
  {
    num: "05",
    category: "e-commerce",
    title: "shoe.",
    description: "e-commerce shoe shop website ",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    image: "./Projects/shoe-shop.png",
    live: "https://omergehad405.github.io/sheo-website/",
    github: "https://github.com/omergehad405/sheo-website",
  },
  {
    num: "06",
    category: "website",
    title: "kids gaming",
    description: "full website for kids online gaming ",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    image: "./Projects/Kids-Gaming.png",
    live: "https://omergehad405.github.io/Kids_Gaming/",
    github: "https://github.com/omergehad405/Kids_Gaming",
  },
  {
    num: "07",
    category: "landing page",
    title: "foods",
    description: "landing page for food website ",
    stack: [{ name: "react" }, { name: "scss" }],
    image: "./Projects/Foods.png",
    live: "https://omergehad405.github.io/Food/",
    github: "https://github.com/omergehad405/Food",
  },
  {
    num: "08",
    category: "e-commerce",
    title: "naturio",
    description: "full e-commerce organic store website ",
    stack: [{ name: "react" }, { name: "css" }],
    image: "./Projects/organic-store.png",
    live: "https://omergehad405.github.io/organic_store/",
    github: "https://github.com/omergehad405/organic_store",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.work} id="work">
      <div className={styles.title}>
        <span>my work</span>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>{project.num}</h1>
          <span>{project.title}</span>
          <p>{project.description}</p>
          <ul>
            {project.stack.map((item, idx) => {
              return <li key={idx}>{item.name},</li>;
            })}
          </ul>
          <div
            style={{ borderBottom: "2px solid white", margin: "1rem 0" }}
          ></div>
          <div>
            {project.github ? (
              <a target="_blank" href={project.github}>
                <i className="fa-brands fa-github"></i>
              </a>
            ) : null}
            <a target="_blank" href={project.live}>
              <i className="fa-solid fa-arrow-up arrow"></i>
            </a>
          </div>
        </div>
        <Swiper
          className={styles.swiper}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        >
          {projects.map((project, idx) => {
            return (
              <SwiperSlide className={styles.slide} key={idx}>
                <img src={project.image} alt={project.title} />
              </SwiperSlide>
            );
          })}

          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  );
}

export default Work;
