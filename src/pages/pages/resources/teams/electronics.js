import React from "react";
import Layout from "@theme/Layout";
import styles from "./electronics.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Electronics() {
  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    location.assign("./resources");
  }

  function linuxfunc() {
    location.assign("./other/linux");
  }

  function arduino() {
    location.assign("./other/arduino");
  }

  function github() {
    location.assign("./other/github");
  }

  function ros() {
    location.assign("./other/ros");
  }

  // Teams Navbar Function
  function teamsFunc() {
    document.getElementById("dropdown").classList.toggle(styles.show);
  }

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <nav className={styles.navbar}>
          <ul className={styles.navbar_elements}>
          <button onClick={get_started} className={styles.btn}>
              GET STARTED
            </button>

            <button onClick={teamsFunc} className={styles.btn}>TEAMS</button>

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
        <h1>ELECTRONICS</h1>
        <p className="linux-h3">
          {" "}
          The Electronics/Power team is in charge of converting the internal
          currents from the battery to all the other electronic parts in the
          robot!{" "}
        </p>
        <p className="linux-p">
          As the electrical team, we are in charge of{" "}
          <u>creating the schematic that allows buck converters to function.</u>{" "}
          Our main programs include KiCAD and EagleCAD. This year we switched
          over to <b>KiCAD</b>, which functions as a simpler program for our
          members to design and create schematics for our club.
        </p>
        <span className="accent-color-linux">Buck Converter</span> usually
        labeled as DC/DC Buck Converters, are converters that are able to
        efficiently let high voltage convert into low voltages in order to
        extend battery life and reduce heat. In turn, this has allowed many
        smaller appliances to spring into everyday use.
        <br></br>
        <br></br>
        <span className="accent-color-linux">
          Buck Converter Schematic Example
        </span>{" "}
        <br></br>
        <img
          src={require("@site/static/img/other/buck_converter.png").default}
        ></img>
        <p className="linux-h1"> </p>
        <p className="linux-h3"> Buck Converter Tutorial </p>
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
          We chose this tutorial to follow as it provided a thorough and easy
          explanation between what to choose and pin for a buck converter
          schematic. The tutorial goes over basic requirements that all
          schematics must have and then dives into the specifics for this
          example buck converter schematic. By following this video, members are
          able to learn the difference between voltage outputs when making a
          buck converter and the performance output that the different voltages
          give.
        </p>
      </div>
    </Layout>
  );
}
