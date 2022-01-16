import { StatsList, StatsItem } from "./Statistics.styled";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsList>
      <StatsItem key="good">Good: {good}</StatsItem>
      <StatsItem key="neutral">Neutral: {neutral}</StatsItem>
      <StatsItem key="bad">Bad: {bad}</StatsItem>
      <StatsItem key="total">Total: {total}</StatsItem>
      <StatsItem key="positivePercentage">
        Positive feedbacks: {positivePercentage}%
      </StatsItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
