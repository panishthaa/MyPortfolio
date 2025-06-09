import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assests/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:Panishthaa@email.com">panishthaa@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/assests/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/panishtha-juneja-6a3b0524a/">linkedin.com/panishthajuneja</a>
        </li>
        <li className={styles.link}>
          <img src="/assests/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/panishthaa">github.com/panishtha</a>
        </li>
      </ul>
    </footer>
  );
};
