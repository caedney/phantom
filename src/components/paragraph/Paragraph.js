import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import breakpoints from "utils/breakpoints";

const StyledParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  color: #656565;
  line-height: 1.375em;

  @media ${breakpoints.mobileL} {
    margin-bottom: 28px;
    font-size: 1.125rem;
  }

  @media ${breakpoints.laptopL} {
    margin-bottom: 40px;
    font-size: 1.25rem;
  }
`;

function Paragraph(props) {
  const { children } = props;

  return <StyledParagraph>{children}</StyledParagraph>;
}

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;
