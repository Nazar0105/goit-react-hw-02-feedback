import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = ['good', 'neutral', 'bad'];

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = Object.values(this.state).reduce((acc, value) => acc + value, 0);
    const positivePercentage = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

   return (
  <div className="App">
  <h1>Feedback App</h1>
  <Section title="Leave Feedback">
    <FeedbackOptions options={this.options} onLeaveFeedback={this.handleLeaveFeedback} />
  </Section>
  {totalFeedback > 0 && (
  <Section title="Statistics">
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={totalFeedback}
      positivePercentage={positivePercentage}
    />
  </Section>
)}
{totalFeedback === 0 && (
  <Section title="Notification">
    <Notification message="There is no feedback" />
  </Section>
)}
</div>

);

  }
}

export default App;
