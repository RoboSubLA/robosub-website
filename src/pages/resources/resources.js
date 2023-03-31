import React from "react";
import Layout from "@theme/Layout";
import styles from "./resources.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useRef } from "react";

import { Html, StackedLineChart } from "@mui/icons-material";
import { inputAdornmentClasses } from "@mui/material";
 

export default function ResourcesPage() {

  const { siteConfig } = useDocusaurusContext();

  function get_started() {
    
    // Creating new element tag
    var elem = document.createElement('h');
     
    // Adding text in the element tag
    var text = document.createTextNode("NEW TEXT"); 
    
    // Appending (adding) the text in the element
    elem.appendChild(text);
    
    // Getting document ID
    var rep = document.getElementById("current");

    // Replacing all children node
    rep.replaceChildren(elem);   
  }

  // Teams Navbar Function
  function teamsFunc() {
    document.getElementById("dropdown").classList.toggle(styles.show)
  }

  return (
    <Layout>

      {/* Side Nav Bar */}
      <div className={styles.pageWrapper}>

        <nav className={styles.navbar}> 
          <ul className={styles.navbar_elements}>

            <li>
              <button onClick={get_started} className={styles.btn}> Get Started </button>
            </li>

            <li>
              <button onClick="" className={styles.btn}> Mission Planning </button>
            </li>

            <li>
              <button onClick={teamsFunc} className={styles.btn}> Teams </button>

              <div id="dropdown" className={styles.DPContent}>

                <a href='./teams/framehull'>Frame and Hull</a>
                <a href='./teams/actuatedsys'>Actuated Systems</a>
                <a href='./teams/electronics'>Electronics</a>
                <a href='./teams/controls'>Controls</a>
                <a href='./teams/autonomy'>Autonomy</a>
                <a href='./teams/compvis'>Computer Vision</a>

              </div>

            </li>

            <li>
              <button onClick="" className={styles.btn}> Arduino </button>
            </li>

            <li>
              <button onClick="" className={styles.btn}> Linux </button>
            </li>

            <li>
              <button onClick="" className={styles.btn}> Git & GitHub </button>
            </li>

            <li>
              <button onClick="" className={styles.btn}> Robot OS </button>
            </li>

          </ul>
        </nav>

        {/* Default Div */}
        <div className={styles.myDIV}>

          {/* <p dangerouslySetInnerHTML={markup} id="demo" /> */}
          <p id="current">

            <h1> Welcome Members & RoboSum Teams </h1>

            <p> Here at RoboSub LA we are passionate about Robotics and we want to share what we know with our community of Robotic enthusiast. </p>

            <h2> Team Breakdown Subteams: </h2>

            {/* Teams */}
            <nav>

              <ul>
                <li>
                  
                  <div className="">
                    <a href='./teams/framehull'>Frame and Hull</a> 
                  </div>

                  <div className="">
                    <a href='./teams/actuatedsys'>Actuated Systems</a>
                  </div>

                  <div className="">
                    <a href='./teams/electronics'>Electronics</a>
                  </div>

                  <div className="">
                    <a href='./teams/controls'>Controls</a>
                  </div>

                  <div className="">
                    <a href='./teams/autonomy'>Autonomy</a>
                  </div>
                  
                  <div className="">
                    <a href='./teams/compvis'>Computer Vision</a>
                  </div>

                </li>
              </ul>
    
            </nav>

          </p>

        </div>

      </div>

  

    </Layout>
  );
}
