import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          Good: <span className={styles.value}>{good}</span>
        </li>
        <li>
          Neutral: <span className={styles.value}>{neutral}</span>
        </li>
        <li>
          Bad: <span className={styles.value}>{bad}</span>
        </li>
        <li>
          Total: <span className={styles.value}>{total}</span>
        </li>
        <li>
          Positive Feedback: <span className={styles.value}>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
