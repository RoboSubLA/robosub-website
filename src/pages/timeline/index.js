import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import CountdownTimer from '../../components/CountDownTimer';
import AnimatedSubmarine from '../../components/AnimatedSubmarine';
import TimelineFeature from '../../components/TimelineFeature';

import styles from './styles.module.css';

export default function Timeline() {
  const COMPETITION_DATE = new Date('2023-07-27')
   
  const NOW_IN_MS = new Date().getTime();

  const DAYS_TILL_COMPETITION_IN_MS = COMPETITION_DATE - NOW_IN_MS ;

  const dateTimeAfterDaysTillComp = NOW_IN_MS + DAYS_TILL_COMPETITION_IN_MS;

  return (
    <Layout>
      <div className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>RoboSub Competition</h1>
        <CountdownTimer targetDate={dateTimeAfterDaysTillComp} />
        <TimelineFeature/>
      </div>
    </Layout>
  );
}
