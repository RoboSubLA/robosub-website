import React from "react";
import Layout from "@theme/Layout";
// import styles from './styles.module.css';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function twentyTwenty() {
    const { siteConfig } = useDocusaurusContext();
  
    return(
      <Layout>
        <h> 2020 </h>
      </Layout>
    );
  }