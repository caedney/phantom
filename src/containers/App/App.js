import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { csv } from "d3";
import styled from "styled-components";

import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import Dashboard from "../../components/Dashboard/Dashboard";
import { updateData } from "../../reducers/dataReducer";
import breakpoints from "../../utils/breakpoints";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 32px 16px;

  @media ${breakpoints.mobileL} {
    padding: 40px 24px;
  }

  @media ${breakpoints.laptop} {
    padding: 40px 60px;
  }

  @media ${breakpoints.laptopL} {
    padding: 60px;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    csv("/data/covid-cases.csv").then(cases => {
      dispatch(updateData(cases));
    });
  }, [dispatch]);

  return (
    <AppContainer>
      <Header />
      <Filter />
      <Dashboard />
    </AppContainer>
  );
}

export default App;
