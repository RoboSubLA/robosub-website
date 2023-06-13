import React from "react";
import Layout from "@theme/Layout";
import styles from "./controls.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Controls() {
  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    location.assign("./../resources");
  }
  function linuxfunc() {
    location.assign("../other/linux");
  }

  function arduino() {
    location.assign("../other/arduino");
  }

  function github() {
    location.assign("../other/github");
  }

  function teamsFunc() {
    document.getElementById("dropdown").classList.toggle(styles.show);
  }

  return (
    <Layout>
      {/* Side Nav Bar */}
      <div className={styles.pageWrapper}>
        <nav className={styles.navbar}>
          <ul className={styles.navbar_elements}>
            <button onClick={get_started} className={styles.btn}>
              GET STARTED
            </button>

            <button onClick={teamsFunc} className={styles.btn}>
              {" "}
              TEAMS{" "}
            </button>

            <div id="dropdown" className={styles.DPContent}>
              <a href="./framehull">Frame and Hull</a>
              <a href="./electronics">Electronics</a>
              <a href="./actuatedsys">Actuated Systems</a>
              <a href="./controls">Controls</a>
              <a href="./autonomy">Autonomy</a>
              <a href="./compvis">Computer Vision</a>
            </div>
            <button onClick={arduino} className={styles.btn}>
              ARDUINO
            </button>

            <button onClick={linuxfunc} className={styles.btn}>
              LINUX
            </button>

            <button onClick={github} className={styles.btn}>
              GIT & GITHUB
            </button>
          </ul>
        </nav>

        <h1>CONTROLS</h1>
        <p>
          Controls sits between Autonomy and our actual hardware and turns our
          high-level movement commands into individual thruster and actuator
          commands to actually move the robot around. We work mostly in C++ on
          embedded systems such as our custom controller PCBs, and communicate
          with the rest of our software over ROS. <br></br>
          <br></br>Most of the year is spent updating our software to be
          compatible with new versions of Linux and ROS, and adding any features
          we think could improve our vehicles' performance. When it comes time
          to test, we spend a lot of time tuning the parameters of our various
          orientation and translation controllers to best accomplish commanded
          movements in the shortest time possible.
        </p>
      </div>
    </Layout>
  );
}
