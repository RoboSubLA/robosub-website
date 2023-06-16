import React from "react";
import Layout from "@theme/Layout";
import styles from "./compvis.module.css";

export default function CompVis() {
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
          <h1 className={styles.title}>COMPUTER VISION</h1>
          <div className={styles.desc}>
            <p>
              The Computer Vision subteam is in charge of providing vision or
              acting as the 'eyes' to the submarine through custom object
              detection models. We utilize the You Only Look Once algorithm as
              well as the computer vision library OpenCV. The You Only Look Once
              algorithm allows us to create custom object detection models.
              <br></br>
            </p>
          </div>

          <div className={styles.con}> 
            <h1>
              <b>
                <u> Our Process</u>
              </b>
            </h1>
            <p>
              We first print vinyl posters of the competition objects and
              reconstruct what we anticipate to be the obstacles. Then, we
              submerge the objects underwater and take videos. From the
              underwater videos, we use a Python and OpenCV to publish and
              extract frames which will be the dataset to be trained on. After
              we have prepared our dataset, we then manually annotate each image
              with bounding boxes. Once annotations are done, the dataset is
              ready to be trained on. We employ a few augmentations to make our
              dataset more robust and help improve accuracy.<br></br>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_aBFA4g8l8E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <br></br> Additionally, for some obstacles, we may add classes to
              denote orientation which helps Autonomy make decisions on
              navigation. We then use Google Colab for its computing ability
              (GPU) to train using the YOLO algorithm. Once we have our trained
              object detection models, we utilize OpenCV within our submarine to
              subscribe and publish frames from the equipped RGB camera using
              ROS.<br></br>
              <br></br>
              <p className={styles.subheader}>
                Before Applying Augmentation (Static) -
              </p>
              <img
                src={require("@site/static/img/other/cvpage.jpeg").default}
                width="auto"
                maxHeight="200px"
              />
              <br></br>
              <p className={styles.subheader}>
                After Applying Augmentation (Static) -
              </p>
              <img
                src={require("@site/static/img/other/cvAfter.jpeg").default}
                width="auto"
                maxHeight="200px"
              />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
