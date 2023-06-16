import React from "react";
import Layout from "@theme/Layout";
import styles from "./autonomy.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Autonomy() {
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
      <div className={styles.navBackground}>
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
</div>

        <div className={styles.myDIV}>
        <h1 style={{fontSize:"4rem"}}>AUTONOMY</h1>
        <p>
          The Autonomy subteam is responsible for developing the competition
          mission plan and task execution algorithms to ensure efficient and
          successful competition runs.
          <br></br><br></br>
          The autonomy software module collects and analyzes data from all other
          software systems. It uses the information to make decisions on what
          tasks to do and how to perform the desired task. It accomplishes this
          by using the Behavior Tree Framework to organize decision-making
          processes and incorporates fallback and recovery nodes for different
          scenarios of software or hardware malfunction.{" "}
          <u>
            This software is written in C++ using the ROS2 and BehaviorTree
            Frameworks.
          </u>
        </p>
        <p className="linux-h3">
          {" "}
          Introductory Video Series on Behavior Trees{" "}
        </p>
        <p className="iframe-align">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kRp3eA09JkM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
        <p className="iframe-align">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4PUiDmD5dkg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
        <p className="iframe-align">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/T_Q57-audMk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
        <a href="behaviortree.dev">BehaviorTree Library Website</a>
        <br></br>
        <a href="https://docs.ros.org/en/humble/index.html">
          ROS2 Humble Documentation
        </a>
      </div>
      </div>
    </Layout>
  );
}
