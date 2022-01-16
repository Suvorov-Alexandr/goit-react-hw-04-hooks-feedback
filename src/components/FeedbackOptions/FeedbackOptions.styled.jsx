import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background-color: #8080f7;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 15px;
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: #2ca82c;
    &:nth-last-child(-n + 2) {
      background-color: #c0c0c0;
    }
    &:last-child {
      background-color: #f30000;
    }
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default Button;
