import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import styled from "styled-components";

import LineChart from "../../components/LineChart/LineChart";
import breakpoints from "../../utils/breakpoints";
import dateFormat from "../../utils/dateFormat";
import {
  updateLabels,
  updateNewCases,
  updateTotalCases,
} from "../../reducers/dataReducer";

const DashboardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 12px 20px 16px 12px;
  border: 1px solid hsl(0, 0%, 80%);

  @media ${breakpoints.laptopL} {
    padding: 36px 60px 48px 60px;
  }
`;

function Dashboard() {
  const dispatch = useDispatch();
  const { data, labels, newCases, totalCases } = useSelector(
    state => state.data
  );
  const { borough, month, monthOptions } = useSelector(state => state.filter);

  const reduceCases = (acc, cur) => {
    if (acc.new.length > 12) {
      const currentDay = Number(cur.date.split("-")[2]) - 1;

      acc.new[currentDay] += Number(cur.new_cases);
      acc.total[currentDay] += Number(cur.total_cases);
    } else {
      const month = Number(cur.date.split("-")[1]) - 1;
      const endOfMonth = dayjs(cur.date).daysInMonth();
      const lastDay = `${cur.date.substr(0, 7)}-${endOfMonth}`;

      acc.new[month] += Number(cur.new_cases);

      if (cur.date === lastDay) {
        acc.total[month] += Number(cur.total_cases);
      }
    }

    return acc;
  };

  useEffect(() => {
    let currentLabels = monthOptions.map(({ label }) => label.substr(0, 3));

    if (month) {
      const daysInMonth = dayjs(month.value).daysInMonth();

      currentLabels = Array.from(Array(daysInMonth), (_, i) =>
        dateFormat(i + 1)
      );
    }

    const caseData =
      month || borough
        ? data.filter(({ area_name, date }) => {
            if (borough && month) {
              return (
                borough.value === area_name &&
                month.value.split("-")[1] === date.split("-")[1]
              );
            } else if (borough) {
              return borough.value === area_name;
            } else {
              return month.value.split("-")[1] === date.split("-")[1];
            }
          })
        : data;

    const reducedCases = caseData.reduce(reduceCases, {
      new: new Array(currentLabels.length).fill(0),
      total: new Array(currentLabels.length).fill(0),
    });

    dispatch(updateLabels(currentLabels));
    dispatch(updateNewCases(reducedCases.new));
    dispatch(updateTotalCases(reducedCases.total));
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
      <LineChart data={lineChartData} />
    </DashboardContainer>
  );
}

export default Dashboard;
