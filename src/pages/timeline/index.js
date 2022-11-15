import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import CountdownTimer from '../../components/CountDownTimer';
import AnimatedSubmarine from '../../components/AnimatedSubmarine';
import TimelineFeature from '../../components/TimelineFeature';

import styles from './styles.module.css';

export default function Timeline() {
  const DAYS_TILL_COMPETITION_IN_MS = 23223223323;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterDaysTillComp = NOW_IN_MS + DAYS_TILL_COMPETITION_IN_MS;

  return (
    <Layout>
      <div className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>RoboSub Competition</h1>
        <CountdownTimer targetDate={dateTimeAfterDaysTillComp} />
      </div>
      <div className={styles.timeline}>
        <TimelineFeature/>
      </div>
    </Layout>
  );
}
