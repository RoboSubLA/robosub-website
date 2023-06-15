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

    return(
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
        <h> Actuated Systems</h>
        <p>The actuated systems team oversees designing and building a robotic claw, a ball dropper, and a torpedo launcher. These systems are designed to successfully complete tasks that are needed during competition. Students use their engineering skills to design the actuated system and use SolidWorks and 3D printing to bring it to life. FEA’s and CFD’s are produced to ensure the proper performance of the system. The actuated systems team works together with the computer vision and navigation teams to ensure that the sensors and vision can successfully complete the competition tasks.</p>
        </div>
      </Layout>
    );
  }