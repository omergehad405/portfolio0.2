import React, { useContext, useEffect, useRef } from "react";
import styles from "./About.module.scss";
import { AppContext } from "../../Context/context";

function About() {
  const { section, setSection } = useContext(AppContext);
  const sectionBtnsRef = useRef([]);
  let sectionBtn = sectionBtnsRef.current;

  useEffect(() => {
    const handleClick = (e) => {
      const newSection = e.target.dataset.section;
      setSection(newSection);
    };

    if (sectionBtn.length > 0) {
      sectionBtn.forEach((btn) => {
        if (btn) {
          btn.addEventListener("click", handleClick);
        }
      });
    }

    return () => {
      sectionBtn.forEach((btn) => {
        if (btn) {
          btn.removeEventListener("click", handleClick);
        }
      });
    };
  });

  return (
    <section className={styles.about} id="about">
      <div className={styles.title}>
        <span>about me</span>
      </div>
      <div className={styles.sections}>
        <button
          className={section === "about" ? styles.active : ""}
          data-section="about"
          ref={(el) => (sectionBtnsRef.current[0] = el)}
        >
          about me
        </button>
        <button
          className={section === "skils" ? styles.active : ""}
          data-section="skils"
          ref={(el) => (sectionBtnsRef.current[1] = el)}
        >
          skils
        </button>
      </div>
      <div className={styles.container}>
        <img
          src="./personal-info.png"
          className={styles.aboutImg}
          alt="Personal Info"
        />
        {section === "about" && (
          <div className={styles.personal_info}>
            <h1>personal info</h1>
            <p className={styles.about_info}>
              I am a frontend developer with extensive experience in utilizing
              web technologies to create dynamic, responsive, and user-friendly
              interfaces. With over four years in the industry, I have honed my
              skills in HTML, CSS, JavaScript, and React JS, enabling me to
              build clean, well-structured code and deliver high-quality web
              applications.
            </p>

            <div className={styles.links}>
              <div className={styles.link}>
                <h6>email</h6>
                <a href="mailto:omergehad593@gmail.com">
                  omergehad593@gmail.com
                </a>
              </div>
              <div className={styles.link}>
                <h6>phone</h6>
                <a href="tel:01061989116">+20 01061989116</a>
              </div>
              <div className={styles.link}>
                <h6>location</h6>
                <a>cairo , shubra</a>
              </div>
              <div className={styles.link}>
                <h6>follow</h6>
                <div className={styles.social_links}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/omar-gehad-214302291/"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/omergehad405"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.upwork.com/freelancers/~0131b5cb24cec43395?mp_source=share"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-upwork"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://khamsat.com/user/omer_gehad"
                    rel="noopener noreferrer"
                  >
                    <img src="./khamsat.png" alt="Khamsat_link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {section === "skils" && (
          <div className={styles.skils_container}>
            <div className={styles.skil} data-name="html5">
              <img src="./skils/HTML5.png" alt="Html5" />
            </div>
            <div className={styles.skil} data-name="css 3">
              <img src="./skils/CSS3.png" alt="css3" />
            </div>
            <div className={styles.skil} data-name="java script">
              <img src="./skils/JavaScript.png" alt="java script" />
            </div>
            <div className={styles.skil} data-name="bootstrap">
              <img src="./skils/Bootstrap.png" alt="bootstrap css" />
            </div>
            <div className={styles.skil} data-name="scss">
              <img src="./skils/Sass.png" alt="scss" />
            </div>
            <div className={styles.skil} data-name="react JS">
              <img src="./skils/React.png" alt="react js" />
            </div>
            <div className={styles.skil} data-name="tailwind css">
              <img src="./tailwind.svg" alt="tailwind css" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
