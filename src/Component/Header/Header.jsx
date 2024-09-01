import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { AppContext } from "../Context/context";

function Header() {
  const [openInfo, setOpenInfo] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const { setSection } = useContext(AppContext);

  const toggleInfo = () => {
    setOpenInfo(!openInfo);
  };
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header>
      <div className={styles.header_container}>
        <a href="#" className={styles.logo}>
          omar.
        </a>

        <ul className={`${styles.navbar} ${openNav ? `${styles.active}` : ""}`}>
          <li
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <a href="#home">home</a>
          </li>
          <li
            onClick={() => {
              setOpenNav(!openNav);
              setSection("about");
            }}
          >
            <a href="#about">about</a>
          </li>
          <li
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <a href="#services">services</a>
          </li>
          <li
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <a href="#work">projects</a>
          </li>
          <li
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            <a href="#contact">contact</a>
          </li>
        </ul>

        <div className={styles.contact}>
          <div className={styles.info} onClick={toggleInfo}>
            <i className="fa-solid fa-bars"></i>
          </div>

          <div
            className={`${styles.bars} ${openNav ? `${styles.active}` : ""}`}
            onClick={toggleNav}
          >
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
          </div>

          <div
            className={`${styles.info_box} ${openInfo ? `${styles.active}` : ""}`}
          >
            <div
              className={styles.close}
              onClick={() => {
                setOpenInfo(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>

            <div className={styles.info_container}>
              <a href="#">omar</a>
              <p>
                I am a frontend developer with extensive experience in utilizing
                web technologies to create dynamic, responsive, and
                user-friendly interfaces. With over four years in the industry
              </p>

              <div className={styles.contacts_link}>
                <div>
                  <h5>email</h5>
                  <a href="mailto:omergehad593@gmail.com">
                    omergehad593@gmail.com
                  </a>
                </div>
                <div>
                  <h5>call now</h5>
                  <a href="tel:01061989116">+20 01061989116</a>
                </div>
              </div>

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
                  <img src="./khamsat.png" alt="Khamsat" />
                </a>
              </div>

              <div className={styles.contact}>
                <button>
                  <Link to="/contact">
                    lets talk <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
