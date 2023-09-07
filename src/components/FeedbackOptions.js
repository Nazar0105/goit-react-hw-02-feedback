import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <h2>Leave Feedback</h2>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;