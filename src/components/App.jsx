import { Component } from 'react';
import { FeedbackOptions } from './FedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistacs';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState.good + 1,
    }));

    // this.setState(
    //   prevState =>
    //     (evt.target.name === 'good' && {
    //       good: prevState.good + 1,
    //     }) ||
    //     (evt.target.name === 'neutral' && {
    //       neutral: prevState.neutral + 1,
    //     }) ||
    //     (evt.target.name === 'bad' && {
    //       bad: prevState.bad + 1,
    //     })
    // );

    // Хотіла зробити через switch і не вдалося((
    // чи краще взігалі 3 окремі функції?
    // {
    //   switch (evt.target.name) {
    //     case 'good':
    //       {
    //         good: prevState.good + 1,
    //       };
    //       break;
    //     case 'neutral':
    //       {
    //         neutral: prevState.neutral + 1,
    //       };
    //       break;
    //     case 'bad':
    //       {
    //         bad: prevState.bad + 1,
    //       };
    //       break;
    //     default:
    //       console.log(1);
    //       break;
    //   }
    // }
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={this.handleClick} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        <Notification total={total} massage={'There is no feedback'} />
      </Section>
    );
  }
}
