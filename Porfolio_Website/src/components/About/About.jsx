import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me with a Laptop coding"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/cursorIcon.png")} 
              alt="Cursor Icon"
            />
            <div className={styles.aboutItemText} >
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with expertise in React, JavaScript,
                and CSS. I have a passion for creating user-friendly and
                visually appealing web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm also a backend developer with expertise in Node.js, Express,
                and MongoDB. I have experience building scalable and secure APIs
                for web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I'm also a UI designer with expertise in designing user-friendly
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
