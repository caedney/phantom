import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Select from "../select/Select";
import { updateMonth, updateBorough } from "../../reducers/filterReducer";

const SelectContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  max-width: 720px;
  margin: 0 auto 40px;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    margin-left: 10px;
  }
`;

const monthOptions = [
  { value: "jan", label: "January" },
  { value: "feb", label: "February" },
  { value: "mar", label: "March" },
  { value: "apr", label: "April" },
  { value: "may", label: "May" },
  { value: "jun", label: "June" },
  { value: "jul", label: "July" },
  { value: "aug", label: "August" },
  { value: "sep", label: "September" },
  { value: "oct", label: "October" },
  { value: "nov", label: "November" },
  { value: "dec", label: "December" },
];

const boroughOptions = [{ value: "E09000002", label: "City of London" }];

function Filter(props) {
  const dispatch = useDispatch();

  const handleUpdateMonth = selected => {
    dispatch(updateMonth(selected));
  };

  const handleUpdateBorough = selected => {
    dispatch(updateBorough(selected));
  };

  return (
    <SelectContainer>
      <Select
        placeholder="Select Borough..."
        options={boroughOptions}
        onChange={handleUpdateBorough}
      />
      <Select
        placeholder="Select Month..."
        options={monthOptions}
        onChange={handleUpdateMonth}
      />
    </SelectContainer>
  );
}

Filter.propTypes = {};

export default Filter;
