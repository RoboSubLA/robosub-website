import React from "react";
import styles from "./background.module.css";

export default function AnimatedBackground() {
  return (
    <div className={styles.background}>
      <ul className={styles.submarine}>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
        <li>
          <img src={require("@site/static/img/robosublaoutline.png").default} />
        </li>
      </ul>
    </div>
  );
}
