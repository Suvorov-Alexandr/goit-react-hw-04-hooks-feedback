import Container from "./AppContainer.styled.jsx";
import GlobalStyle from "./components/GlobalStyle";
import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const optionsState = { good, neutral, bad };

  const getStateKeys = () => Object.keys(optionsState);
  const getStateValues = () => Object.values(optionsState);

  const onLeaveFeedback = (evt) => {
    const currentSelection = evt.target.textContent;

    switch (currentSelection) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        break;
    }

    // if (currentSelection === "good") {
    //   setGood((prevState) => prevState + 1);
    // } else if (currentSelection === "neutral") {
    //   setNeutral((prevState) => prevState + 1);
    // } else {
    //   setBad((prevState) => prevState + 1);
    // }
  };

  const countTotalFeedback = () =>
    getStateValues().reduce((acc, state) => acc + state, 0);

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  const optionsKeys = getStateKeys();
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <GlobalStyle />
      <Section title="Please leave feedback!">
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={onLeaveFeedback}
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

export default App;
