import React from "react";
import Layout from "@theme/Layout";
import styles from "./compvis.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function ComputerVision() {
  const { siteConfig } = useDocusaurusContext();

  return(
    <Layout>
      <h> Computer Vision </h>
    </Layout>
  );
}