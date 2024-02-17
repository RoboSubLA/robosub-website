import React from "react";
import Layout from "@theme/Layout";
import styles from "./arduino.modules.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Arduino() {
  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    location.assign("./../newresources");
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
                <a href="../teams/framehull">Frame and Hull</a>
                <a href="../teams/electronics">Electronics</a>
                <a href="../teams/actuatedsys">Actuated Systems</a>
                <a href="../teams/controls">Controls</a>
                <a href="../teams/autonomy">Autonomy</a>
                <a href="../teams/compvis">Computer Vision</a>
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
          <h1
            style={{ fontSize: "3rem", fontFamily: "Franklin Gothic Medium" }}
          >
            ARDUINO
          </h1>
          <h2
            style={{
              color: "yellow",
              fontSize: "2rem",
              borderBottom: "1px solid",
            }}
          >
            Installing Arduino IDE
          </h2>
          <p>Instructions to install IDE here:</p>
          <div className={styles.linksCon}>
            <a href="https://www.arduino.cc/en/Guide/Windows">
              <img
                className={styles.icon}
                src={require("@site/static/img/other/windowsLogo.png").default}
                width="200"
                alt="Windows Logo"
                title="Windows Linux Installation"
              ></img>
            </a>
            <a
              className="resource-links"
              href="https://www.arduino.cc/en/Guide/Linux"
            >
              <img
                className={styles.icon}
                src={require("@site/static/img/other/linuxLogo.png").default}
                height="90"
                width="180"
                alt="Linux Logo"
                title="Linux Installation"
              ></img>
            </a>

            <a
              className="resource-links"
              href="https://www.arduino.cc/en/Guide/MacOSX"
            >
              <img
                className={styles.icon}
                src={require("@site/static/img/other/macLogo.png").default}
                height="120"
                width="120"
                alt="Mac OS Logo"
                title="Mac Linux Installation"
              ></img>
            </a>

            <br />

            <div className={styles.backgroundContainer}>
              <h2 style={{ color: "black", fontSize: "2rem" }}>
                <b>Arduino Basics</b>
              </h2>
              <p className="iframe-align">
                <iframe
                  className="resource-iframe"
                  src="https://www.youtube.com/embed/mC1vs9UUAzM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </p>
              <h4 className="resource-text">Breadboard, LEDs, and Buttons</h4>
              <br></br>
              <p className="iframe-align">
                <iframe
                  className="resource-iframe"
                  src="https://www.youtube.com/embed/C3ybDK6UlaE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </p>
              <h4>Servo, Potentiometer, and DC Motor</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
