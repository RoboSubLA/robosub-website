import React from "react";
import Layout from "@theme/Layout";
import styles from "./resources.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import { useRef } from "react";

// import { Html, StackedLineChart } from "@mui/icons-material";
// import { inputAdornmentClasses } from "@mui/material";

export default function ResourcesPage() {
  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    location.assign("./resources");
  }

  function linuxfunc() {
    location.assign("./other/linux");
  }

  function arduino() {
    location.assign("./other/arduino");
  }

  function github() {
    location.assign("./other/github");
  }

  function ros() {
    location.assign("./other/ros");
  }

  // Teams Navbar Function
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
              TEAMS
            </button>

            <div id="dropdown" className={styles.DPContent}>
              <a href="./teams/framehull">Frame and Hull</a>
              <a href="./teams/electronics">Electronics</a>
              <a href="./teams/controls">Controls</a>
              <a href="./teams/autonomy">Autonomy</a>
              <a href="./teams/compvis">Computer Vision</a>
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

            <button onClick={ros} className={styles.btn}>
              ROBOT OS
            </button>
          </ul>
        </nav>

        {/* Default Div */}
        <div className={styles.myDIV}>
          <p id="current">
            <h1> Welcome Members & RoboSub Teams </h1>

            <p>
              Here at RoboSub LA we are passionate about Robotics and we want to
              share what we know with our community of Robotic enthusiast.
              <br></br> <br></br>
              <u>ADD HANDBOOK, SECTION BREAKDOWN?</u>
            </p>

            <h2> Team Breakdown Subteams: </h2>

            {/* Teams */}
            <div className="">
              <a href="./teams/framehull">Frame and Hull</a>
            </div>

            <div className="">
              <a href="./teams/electronics">Electronics</a>
            </div>

            <div className="">
              <a href="./teams/controls">Controls</a>
            </div>

            <div className="">
              <a href="./teams/autonomy">Autonomy</a>
            </div>

            <div className="">
              <a href="./teams/compvis">Computer Vision</a>
            </div>
          </p>
        </div>
      </div>
    </Layout>
  );
}
