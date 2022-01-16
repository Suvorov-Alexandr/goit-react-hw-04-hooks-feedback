import { SectionSC, Title } from "./Section.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <SectionSC>
      <Title>{title}</Title>
      {children}
    </SectionSC>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
