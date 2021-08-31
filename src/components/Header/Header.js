import React from "react";
import styled from "styled-components";

import Heading from "components/Heading";
import Paragraph from "components/Paragraph";

const HeaderContainer = styled.div`
  text-align: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Heading component="h1">COVID-19</Heading>
      <Paragraph>
        The effect of Covid-19 across London Boroughs in 2020
      </Paragraph>
    </HeaderContainer>
  );
}

export default Header;
