import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Who Are We?",
    Svg: require("@site/static/img/who_are_we.svg").default,
    description: (
      <>
        RoboSub LA is an interdisciplinary team at California State University,
        Los Angeles that builds autonomous submarine vehicles. Our team is
        divided into two groups, the student organization and the senior design
        team. We work to produce two separate autonomous underwater vehicles.
        Our student organization consists of five subteams; Frame and Hull,
        Electronics, Controls, Autonomy, and Computer Vision.
      </>
    ),
  },
  {
    title: "What We Do?",
    Svg: require("@site/static/img/what_we_do.svg").default,
    description: (
      <>
        Throughout the school year, we collaborate to design and manufacture two
        autonomous submarines for the internation RoboSub competition. We strive
        to create an encouraging environment from multiple disciplines
        including, but not limited to, Mechanical, Civil, Electrical Engineering
        and Computer Science.
      </>
    ),
  },
  {
    title: "Robosub Competition",
    Svg: require("@site/static/img/submarine_black_filled.svg").default,
    description: (
      <>
        The fundamental goal of the RoboSub competition is for an Autonomous
        Underwater Vehicle (AUV) to demonstrate its autonomy by completing
        underwater tasks, with a new theme each year. This year, the theme of the competition is derived from the iconic Science Fiction movie Stargate! 
        There will be several tasks within an obstacle course our autonomous underwater vehicles will be expected to navigate through and complete.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
