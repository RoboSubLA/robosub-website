import React from 'react';
import styles from './styles.module.css';

const DateTimeDisplay = ({ value, type, isDanger }) => {

  return (
    <div className={styles.isDanger ? styles.countdown.danger : styles.countdown}>
      <p>{value} <span>{type}</span></p>
    </div>
  );
};

export default DateTimeDisplay;
