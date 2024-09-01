import React from "react";
import styles from "./NeedProject.module.scss";
function NeedProject() {
  return (
    <section className={styles.Nproject}>
      <div className={styles.Nproject_container}>
        <div className={styles.info}>
          <div className={styles.title}>
            <span>need project ?</span>
          </div>
          <h1>
            let's work together <br />
            fixed a meeting
          </h1>
          <div className={styles.links}>
            <div className={styles.link}>
              <div className={styles.link_icon}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className={styles.link_info}>
                {" "}
                <h6>email</h6>
                <a href="mailto:omergehad593@gmail.com">
                  omergehad593@gmail.com
                </a>
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.link_icon}>
                <i className="fa-solid fa-phone"></i>
              </div>

              <div className={styles.link_info}>
                {" "}
                <h6>phone</h6>
                <a href="tel:01061989116">+20 01061989116</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src="./project-need.png" alt="customer service img" />
        </div>
      </div>
    </section>
  );
}

export default NeedProject;
