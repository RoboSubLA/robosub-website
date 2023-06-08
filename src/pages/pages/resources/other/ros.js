import React from "react";
import Layout from "@theme/Layout";
import styles from "./ros.modules.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function ROS() {
  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    
    location.assign('./../resources')
  }
  function linuxfunc() {
    location.assign('../other/linux');
  }

  function arduino() {
    location.assign('../other/arduino');
  }

  function github() {
    location.assign('../other/github');
  }

  function ros() {
    location.assign('../other/ros');
  }

  function teamsFunc() {
    document.getElementById("dropdown").classList.toggle(styles.show)
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
              {" "}
              TEAMS{" "}
            </button>

            <div id="dropdown" className={styles.DPContent}>
              <a href="../teams/framehull">Frame and Hull</a>
              <a href="../teams/electronics">Electronics</a>
              <a href="../teams/controls">Controls</a>
              <a href="../teams/autonomy">Autonomy</a>
              <a href="../teams/compvis">Computer Vision</a>
            </div>
            <button onClick={arduino} className={styles.btn}>ARDUINO</button>
          
          <button onClick={linuxfunc} className={styles.btn}>LINUX</button>
     
          <button onClick={github} className={styles.btn}>GIT & GITHUB</button>

            <button onClick={ros} className={styles.btn}>ROBOT OS</button>

          </ul>
        </nav>
     
      <h1>ROBOT OPERATING SYSTEM (2)</h1>
      
      </div>
    </Layout>
  );
}