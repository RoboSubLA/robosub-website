import React from "react";
import Layout from "@theme/Layout";
import styles from "./compvis.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function CompVis() {
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

  function ros() {
    location.assign("../other/ros");
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
              TEAMS
            </button>

            <div id="dropdown" className={styles.DPContent}>
              <a href="./framehull">Frame and Hull</a>
              <a href="./electronics">Electronics</a>
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

            <button onClick={ros} className={styles.btn}>
              ROBOT OS
            </button>
          </ul>
        </nav>

        <h1>COMPUTER VISION</h1>
        <p>
          The Computer Vision subteam is in charge of providing vision or acting
          as the 'eyes' to the submarine through custom object detection models.
          We utilize the You Only Look Once algorithm as well as the computer
          vision library OpenCV. The You Only Look Once algorithm allows us to
          create custom object detection models. 
          <br></br><br></br>We first print vinyl posters of
          the competition objects and reconstruct what we anticipate to be the
          obstacles. Then, we submerge the objects underwater and take videos.
          From the underwater videos, we use a Python script and OpenCV to
          publish and extract frames which will be the dataset to be trained on.
          After we have prepared our dataset, we then manually annotate each
          image with bounding boxes. Once annotations are done, the dataset is
          ready to be trained on. We employ a few augmentations to make our
          dataset more robust and help improve accuracy, which include Gaussian
          blur, changing the image orientation, and cropping.<br></br><br></br> Additionally, for
          some obstacles, we may add classes to denote orientation which helps
          Autonomy make decisions on navigation. We then use Google Colab for
          its computing ability (GPU) to train using the YOLO algorithm. Once we
          have our trained object detection models, we utilize OpenCV within our
          submarine to subscribe and publish frames from the equipped RGB camera
          using ROS. We syncrohnize the YOLO repository to utilize our models to
          detect objects in realtime.
        </p>
      </div>
    </Layout>
  );
}
