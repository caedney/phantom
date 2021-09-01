import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import styled from "styled-components";

import LineChart from "components/LineChart";
import Loader from "components/Loader";
import breakpoints from "utils/breakpoints";
import dateFormat from "utils/dateFormat";
import {
  updateLabels,
  updateNewCases,
  updateTotalCases,
} from "reducers/dataReducer";

const DashboardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid hsl(0, 0%, 80%);
  height: 360px;
  padding: 12px 20px 16px 12px;

  @media ${breakpoints.mobileL} {
    height: 400px;
    padding: 16px 24px 24px 24px;
  }

  @media ${breakpoints.tablet} {
    height: 480px;
    padding: 24px 40px 32px 40px;
  }

  @media ${breakpoints.laptopL} {
    height: 540px;
    padding: 28px 48px 40px 48px;
  }

  @media ${breakpoints.desktop} {
    height: 600px;
    padding: 36px 60px 48px 60px;
  }
`;

function Dashboard() {
  const dispatch = useDispatch();
  const { data, isLoading, labels, newCases, totalCases } = useSelector(
    state => state.data
  );
  const { borough, month, monthOptions } = useSelector(state => state.filter);

  const reduceCases = (cases, currentCase) => {
    const currentNewCase = Number(currentCase.new_cases);
    const currentTotalCase = Number(currentCase.total_cases);
    const currentDate = currentCase.date;

    if (cases.new.length > 12) {
      const currentDay = Number(currentDate.split("-")[2]) - 1;

      cases.new[currentDay] += currentNewCase;
      cases.total[currentDay] += currentTotalCase;
    } else {
      const month = Number(currentDate.split("-")[1]) - 1;
      const endOfMonth = dayjs(currentDate).daysInMonth();
      const lastDay = `${currentDate.substr(0, 7)}-${endOfMonth}`;

      cases.new[month] += currentNewCase;

      if (currentDate === lastDay) {
        cases.total[month] += currentTotalCase;
      }
    }

    return cases;
  };

  useEffect(() => {
    if (data.length) {
      let currentData = data;
      let currentLabels = monthOptions.map(({ label }) => label.substr(0, 3));

      if (month) {
        const daysInMonth = dayjs(month.value).daysInMonth();

        currentData = currentData.filter(
          item => month.value.split("-")[1] === item.date.split("-")[1]
        );

        currentLabels = Array.from(Array(daysInMonth), (_, i) =>
          dateFormat(i + 1)
        );
      }

      if (borough) {
        currentData = currentData.filter(
          item => borough.value === item.area_name
        );
      }

      const reducedCases = currentData.reduce(reduceCases, {
        new: new Array(currentLabels.length).fill(0),
        total: new Array(currentLabels.length).fill(0),
      });

      dispatch(updateLabels(currentLabels));
      dispatch(updateNewCases(reducedCases.new));
      dispatch(updateTotalCases(reducedCases.total));
    }
  }, [borough, month, dispatch, monthOptions, data]);

  const lineChartData = {
    labels,
    datasets: [
      {
        label: "# of New Cases",
        data: newCases,
        backgroundColor: "rgb(38, 132, 255)",
        borderColor: "rgba(38, 132, 255, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "# of Total Cases",
        data: totalCases,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <DashboardContainer>
      {isLoading ? <Loader /> : <LineChart data={lineChartData} />}
    </DashboardContainer>
  );
}

export default Dashboard;
