import React from "react";
import Layout from "@theme/Layout";
import styles from "./actuatedsys.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ActuatedSys() {
    const { siteConfig } = useDocusaurusContext();
  
    return(
      <Layout>
        <h> Actuated System </h>
      </Layout>
    );
  }