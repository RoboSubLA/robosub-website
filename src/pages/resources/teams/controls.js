import React from "react";
import Layout from "@theme/Layout";
import styles from "./controls.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function Controls() {
  const { siteConfig } = useDocusaurusContext();

  return(
    <Layout>
      <h> Controls </h>
    </Layout>
  );
}