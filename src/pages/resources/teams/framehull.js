import React from "react";
import Layout from "@theme/Layout";
import styles from "./framehull.module.css";

export default function FrameHull() {
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
          <h1 className={styles.title}>FRAME AND HULL</h1>
          <p className={styles.para}>
            {" "}
            The Frame and Hull subteam primarily utilizes SolidWorks for
            building our 3D model of the robotic submarine. To ensure everyone
            can contribute to building the model, we host introductory
            SolidWorks workshops - where we go over the basics of the
            3D-modeling software. Additionally, after creating renders and
            designs, we will manufacture most parts of the vehicle. Linked below
            are some videos to watch if you are unable to come to our workshops.
          </p>

          <div className={styles.container}>
            <h2 className={styles.subheading}>
              {" "}
              <b>
                {" "}
                <u>Introductory SolidWorks Tutorials</u>
              </b>
            </h2>

            <p className={styles.desc}>SolidWorks for Beginners!</p>
            <p className="iframe-align">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qtgmGkEPXs8?start=110"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>

            <p className={styles.desc}>SolidWorks Basics and Parts.</p>
            <p className="iframe-align">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CII_iPwVLUg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br></br> <br></br>
              <p className={styles.desc}>
                SolidWorks Engine Assembly and Animation.
              </p>
              <iframe
                className={styles.responsFrame}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5KVSuNt1UX8"
                title="YouTube Video Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
