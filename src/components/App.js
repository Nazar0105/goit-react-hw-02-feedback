import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positivePercentage = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

    return (
      <div className="App">
        <h1>Feedback App</h1>
        <FeedbackOptions onLeaveFeedback={this.handleLeaveFeedback} />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}

export default App;