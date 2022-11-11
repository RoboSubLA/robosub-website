import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../hooks/useCountDown';
import styles from './styles.module.css';

const ExpiredNotice = () => {
  return (
    <div className={styles.expiredNotice}>
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showCounter}>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className={styles.countdownLink}
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p></p>
        <DateTimeDisplay value={hours} type={':'} isDanger={false} />
        <p></p>
        <DateTimeDisplay value={minutes} type={':'} isDanger={false} />
        <p></p>
        <DateTimeDisplay value={seconds} type={'s'} isDanger={false} />
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