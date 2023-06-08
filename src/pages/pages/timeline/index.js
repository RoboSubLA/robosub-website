import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import CountdownTimer from '../../components/CountDownTimer';
import TimelineFeature from '../../components/TimelineFeature';
import AnimatedBackground from '../../components/AnimatedBackground';

import styles from './styles.module.css';

export default function Timeline() {
  const COMPETITION_DATE = new Date('2023-07-27')
   
  const NOW_IN_MS = new Date().getTime();

  console.log('logging now in ms, ', NOW_IN_MS)

  const DAYS_TILL_COMPETITION_IN_MS = COMPETITION_DATE - NOW_IN_MS ;

  const dateTimeAfterDaysTillComp = NOW_IN_MS + DAYS_TILL_COMPETITION_IN_MS;
  // const dateTimeAfterDaysTillComp = 16118262324;


  return (
    <Layout>
      <div className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>RoboSub Competition</h1>
        <CountdownTimer targetDate={dateTimeAfterDaysTillComp} />
        <AnimatedBackground/>
        <TimelineFeature/>
      </div>
    </Layout>
  );
}
