import React from "react";
import Layout from "@theme/Layout";
import styles from "./electronics.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Electronics() {
    const { siteConfig } = useDocusaurusContext();
  
    return(
      <Layout>
        <h> Eletronics</h>
      </Layout>
    );
  }