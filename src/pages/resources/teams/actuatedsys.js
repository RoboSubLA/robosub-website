import React from "react";
import Layout from "@theme/Layout";
import styles from "./actuatedsys.module.css";

export default function ActuatedSys() {
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
                TEAMS
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
          <h1 className={styles.title} style={{ fontSize: "3rem" }}>
            {" "}
            ACTUATED SYSTEMS
          </h1>
          <p className={styles.desc}>
            The Actuated Systems team oversees designing and building a robotic
            claw, a ball dropper, and a torpedo launcher. These systems are
            designed to successfully complete tasks that are needed during
            competition. Students use their engineering skills to design the
            actuated system and use SolidWorks and 3D printing to bring it to
            life. <br></br> <br></br>
            Finite Element Analyses (FEAs) and Computational Fluid Dynamics
            (CFDs) are produced to ensure the proper performance of the system
            was it will be underwater. Additionally, the Actuated Systems team
            works together with the computer vision and navigation teams to
            ensure that the sensors and vision can successfully complete the
            competition tasks.
          </p>
          <div className={styles.con}>
            <div style={{ borderBottom: "1px solid" }}>
              <h1>
                <b>Submarine Components</b>
              </h1>
            </div>
            <p className={styles.subheader}>Submarine Ball Dropper</p>
            <img
              src={require("@site/static/img/other/as1.png").default}
              className={styles.img}
            />
            <p className={styles.subheader}>Robotic Claw (Work-in-Progress)</p>
            <video controls>
              <source
                src={require("@site/static/img/other/as.mp4").default}
                type="video/mp4"
              />
              Your browser does not support videos.
            </video>
          </div>
        </div>
      </div>
    </Layout>
  );
}
