import styled from "styled-components";

const StatsList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const StatsItem = styled.li`
  font-size: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { StatsList, StatsItem };
