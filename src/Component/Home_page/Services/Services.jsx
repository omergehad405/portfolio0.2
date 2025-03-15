import React, { useRef } from "react";
import styles from "./Services.module.scss";

function Services() {
  return (
    <div className={styles.services} id="services">
      <div className={styles.title}>
        <span>services i provide</span>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          I specialize in crafting visually stunning and highly functional
          websites and web applications. My services are tailored to meet the
          unique needs of each project, ensuring a seamless user experience and
          responsive design.
        </div>

        <div className={styles.services_container}>
          <div className={styles.service}>
            <h1 className={styles.service_title}>Custom Web Development</h1>
            <p className={styles.service_info}>
              From simple landing pages to complex web applications, I build
              tailored solutions using modern technologies like React, HTML5,
              and scss
            </p>
          </div>
          <div className={styles.service}>
            <h1 className={styles.service_title}>Responsive Web Design</h1>
            <p className={styles.service_info}>
              I create websites that look great on any device, from desktops to
              smartphones, ensuring a consistent user experience across all
              platforms
            </p>
          </div>
          <div className={styles.service}>
            <h1 className={styles.service_title}>Maintenance and Support</h1>
            <p className={styles.service_info}>
              I provide ongoing support and maintenance to keep your website
              up-to-date and running smoothly, addressing any issues that may
              arise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
