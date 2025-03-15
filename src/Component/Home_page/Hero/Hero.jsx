import React, { useEffect } from "react";
import styles from "./Hero.module.scss";
function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.hero} id="home">
      <div className={styles.hero_container}>
        <div className={styles.left}>
          <div className={styles.phone}>
            <a href="tel:01061989116">
              <i className="fa-solid fa-phone"></i>
              (+20) 01061989116
            </a>
          </div>
          <div className={styles.scroll}>
            <p>scroll down</p>
            <img src="./download.png" />
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.info}>
            <div>
              <a target="_blank" href="https://khamsat.com/user/omer_gehad">
                Currently available for freelance <br />
                worldwide
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className={styles.hero_title}>
              <h2>front end</h2>
              <h3 data-text="Developer">Developer</h3>
            </div>

            <button>
              <a href="./cv.pdf" download className="cv-button">
                download CV
              </a>
            </button>
          </div>
          <img src="./home.png" alt="my photo" />
        </div>

        <div className={styles.right}>
          <div>
            <p>follow me</p>
            <img src="./download.png" />
          </div>

          <div className={styles.social_links}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/omar-gehad-214302291/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/omergehad405">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://www.upwork.com/freelancers/~0131b5cb24cec43395?mp_source=share"
            >
              <i className="fa-brands fa-upwork"></i>
            </a>
            <a target="_blank" href="https://khamsat.com/user/omer_gehad">
              <img src="./khamsat.png" alt="Khamsat" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
