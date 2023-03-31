import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountDown';
import { Card, CardContent } from '@mui/material';

import styles from './styles.module.css';

const ExpiredNotice = () => {
  return (
    <div className={styles.expiredNotice}>
      <span>Happening NOW!!!</span>
      <p>Wish Us GoodLuck!!</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showCounter}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.countdownLink}
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        {/* <p></p> */}
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        {/* <p></p> */}
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        {/* <p></p> */}
        <DateTimeDisplay value={seconds} type={'Secs'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
