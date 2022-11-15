import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';

import styles from './styles.module.css';

const DateTimeDisplay = ({ value, type, isDanger }) => {

  return (
    <div className={styles.isDanger ? styles.countdown.danger : styles.countdown}>
      <div className={styles.cardContainer}>
        <div className={styles.clockContent}>
          <h1>
            {value}
          </h1>
          <h3>
            {type}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
