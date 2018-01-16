import React from "react";
import { FaMedium, FaEnvelope, FaTwitter, FaGithub } from "react-icons/lib/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:amanmittal.work@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/amandeepmittal">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/amanhimself">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@amanhimself">
            <FaMedium />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
