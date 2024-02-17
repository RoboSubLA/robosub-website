import React from "react";
import Layout from "@theme/Layout";
import styles from "./electronics.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Electronics() {
  function get_started() {
    location.assign("../newresources");
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

  // Teams Navbar Function
  function teamsFunc() {
    document.getElementById("dropdown").classList.toggle(styles.show);
  }

  return (
    <Layout>
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
          <h1 className={styles.title}>ELECTRONICS</h1>
          <p className={styles.desc}>
            {" "}
            The Electronics/Power team is in charge of converting the internal
            currents from the battery to all the other electronic parts in the
            robot! As the electrical team, we are in charge of{" "}
            <u>
              creating the schematic that allows buck converters to function.
            </u>{" "}
            Our main programs include KiCAD and EagleCAD. This year we switched
            over to <b>KiCAD</b>, which functions as a simpler program for our
            members to design and create schematics for our club. We also work
            with Printed Circuit Boards (PCBs) & Power Distribution Boards
            (PDBs).
          </p>

          <div className={styles.buckCon}>
            <h1>
              {" "}
              <u>Buck Convertor Introduction</u>
            </h1>
            <div style={{ borderBottom: "1px solid", margin: "10px" }}>
              <span className="accent-color-linux">Buck Converter</span> usually
              labeled as DC/DC Buck Converters, are converters that are able to
              efficiently let high voltage convert into low voltages in order to
              extend battery life and reduce heat. In turn, this has allowed
              many smaller appliances to spring into everyday use.
              <br></br> <br></br>
              <p className={styles.subheader}>
                Buck Converter Schematic Example -
              </p>
              <img
                src={
                  require("@site/static/img/other/buck_converter.png").default
                }
              />
            </div>{" "}
            <p className="linux-h3"> Buck Converter Tutorial! </p>
            <p className="iframe-align">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ecRQcEWoXvM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
            <p className="linux-p">
              We chose this tutorial to follow as it provided a thorough and
              easy explanation between what to choose and pin for a buck
              converter schematic. The tutorial goes over basic requirements
              that all schematics must have and then dives into the specifics
              for this example buck converter schematic. By following this
              video, members are able to learn the difference between voltage
              outputs when making a buck converter and the performance output
              that the different voltages give.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
