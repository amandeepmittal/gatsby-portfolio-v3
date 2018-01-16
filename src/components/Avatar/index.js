import React from "react";

import avatarImage from "../../assets/avatar.jpeg";
import styles from "./avatarStyles.module.css";

const Avatar = () => {
  return (
    <div>
      <img src={avatarImage} className={styles.avatarImg} />
    </div>
  );
};

export default Avatar;
