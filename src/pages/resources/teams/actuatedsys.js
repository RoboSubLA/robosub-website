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
        </div>
      </Layout>
    );
  }