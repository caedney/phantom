import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledParagraph = styled.p`
  margin-bottom: 32px;
  color: #333333;
`;

function Paragraph(props) {
  const { children } = props;

  return <StyledParagraph>{children}</StyledParagraph>;
}

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;
