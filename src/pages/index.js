import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AnimatedBackground from '../components/AnimatedBackground';
import { Button, Box } from '@mui/material'
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--background', styles.heroBanner)}>
      <div className="container">
      <AnimatedBackground/>
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 200, md: 350 },
            maxWidth: { xs: 200, md: 350 },
          }}
          alt="RobosubLa Logo"
          src={require("../../static/img/RoboSubLogo.png").default}
        />
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubTitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button id={styles.heroButton} size='large' variant='outlined' href='/docs/intro'>WATCH TRAILER</Button>
          <Button id={styles.heroButton} size='large' variant='outlined' href='/docs/intro'>SIGN UP</Button>
          <Button id={styles.heroButton} size='large' variant='outlined' href='/resources'>GET STARTED</Button> 
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
