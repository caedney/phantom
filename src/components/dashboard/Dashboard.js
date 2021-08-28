import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { csv } from "d3";

import LineChart from "../line-chart/LineChart";
import Filter from "../filter/Filter";
import Heading from "../heading/Heading";
import Paragraph from "../paragraph/Paragraph";
import { updateData } from "../../reducers/dataReducer";

const Stage = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 60px;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 48px 60px;
  border: 1px solid hsl(0, 0%, 80%);
`;

const Header = styled.div`
  text-align: center;
`;

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    csv("/data/covid-cases.csv").then(data => {
      // console.log(data);
      dispatch(updateData(data));
    });
  }, [dispatch]);

  return (
    <Stage>
      <Header>
        <Heading component="h1">COVID-19</Heading>
        <Paragraph>The effect of Covid-19 across London Boroughs</Paragraph>
      </Header>
      <Filter />
      <Container>
        <LineChart />
      </Container>
    </Stage>
  );
}

export default Dashboard;
