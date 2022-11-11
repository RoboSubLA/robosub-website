import React from 'react';
import CountdownTimer from '../../components/CountDownTimer';
import styles from './index.module.scss';

export default function AnimatedSubmarine() {
    const DAYS_TILL_COMPETITION_IN_MS = 2.246e+10;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterDaysTillComp = NOW_IN_MS + DAYS_TILL_COMPETITION_IN_MS;
  
    return (
        <div className={styles.sea}>
            <div className={styles.circleWrapper}>
                {/* <h1 className={styles.heroTitle}>RoboSub Competition</h1>
                <CountdownTimer targetDate={dateTimeAfterDaysTillComp} /> */}
                <div className={styles.bubble}></div>

                <h1 className={styles.heroTitle}>RoboSub Competition</h1>
                
                
                <div className={styles.submarineWrapper}>
                    <div className={styles.submarineBody}>
                        <div className={styles.window}></div>
                        <div className={styles.engine}></div>
                        <div className={styles.light}></div>
                    </div>
                    <div className={styles.helix}></div>
                    <div className={styles.hat}>
                    <div className={styles.ledsWrapper}>
                        <div className={styles.periscope}></div>
                        <div className={styles.leds}></div>
                    </div>
                    </div>
                </div>
                <CountdownTimer targetDate={dateTimeAfterDaysTillComp} />
            </div>
        </div>
    );
  }