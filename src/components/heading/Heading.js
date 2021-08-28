import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeading = styled.div`
  font-size: 3rem;
  margin-bottom: 32px;
  font-weight: 900;
`;

function Heading(props) {
  const { children, component } = props;

  return <StyledHeading as={component}>{children}</StyledHeading>;
}

Heading.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

export default Heading;
