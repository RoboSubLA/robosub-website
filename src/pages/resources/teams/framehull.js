import React from "react";
import Layout from "@theme/Layout";
import styles from "./framehull.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function FrameHull() {
  const { siteConfig } = useDocusaurusContext();

  return(
    <Layout>
      <h> Frame Hull </h>
    </Layout>
  );
}