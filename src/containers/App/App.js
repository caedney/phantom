import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import fetchAllData from "api/fetchAllData";
import fetchAllBoroughs from "api/fetchAllBoroughs";
import { Dashboard, Filter, Header } from "components";
import { updateData, updateIsLoading } from "reducers/dataReducer";
import { updateBoroughOptions } from "reducers/filterReducer";
import breakpoints from "utils/breakpoints";

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
    async function fetchData() {
      dispatch(updateIsLoading(true));
      const data = await fetchAllData();
      dispatch(updateIsLoading(false));
      dispatch(updateData(data));
    }

    async function fetchBoroughs() {
      const options = await fetchAllBoroughs();
      dispatch(updateBoroughOptions(options));
    }

    fetchData();
    fetchBoroughs();
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
