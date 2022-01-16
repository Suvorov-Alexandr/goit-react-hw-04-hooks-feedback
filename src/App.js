import Container from "./AppContainer.styled.jsx";
import GlobalStyle from "./components/GlobalStyle";
import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getStateKeys = () => Object.keys(this.state);
  getStateValues = () => Object.values(this.state);

  onLeaveFeedback = (evt) => {
    const currentSelection = evt.target.textContent;
    this.setState((prevState) => {
      return { [currentSelection]: prevState[currentSelection] + 1 };
    });
  };

  countTotalFeedback() {
    return this.getStateValues().reduce((acc, state) => acc + state, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = this.getStateKeys();
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <GlobalStyle />
        <Section title="Please leave feedback!">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
