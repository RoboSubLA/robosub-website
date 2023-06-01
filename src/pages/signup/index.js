import React from "react";
import Layout from "@theme/Layout";
import styles from './styles.module.css';
import AnimatedBackground from '../../components/AnimatedBackground';
export default function SignUp() {
 return(
  <Layout>

    <div className={styles.heroBanner}>
    <AnimatedBackground/>
    <div className={styles.signupcontainer}>
    
      <div style={{ overflow: "hidden", height: "100%" }}>
        <iframe
          className={styles.signup}
          scrolling="yes"
          title="signup"
          src="https://docs.google.com/forms/d/e/1FAIpQLSe1l1lPIYWP9Wpd0aA0bOTjSVitDO4iYSPvNKmwpBHbvHLo_Q/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </div>
    </div>
    </div>
    </Layout>
  );
}
