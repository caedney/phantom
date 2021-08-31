import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Select } from "components";
import { updateMonth, updateBorough } from "reducers/filterReducer";
import breakpoints from "utils/breakpoints";

const FilterContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 720px;
  margin: 0 auto 8px;

  @media ${breakpoints.tablet} {
    margin-bottom: 24px;
  }
`;

const SelectContainer = styled.div`
  margin: 0 0 8px;
  width: 100%;

  @media ${breakpoints.mobileL} {
    width: calc(50% - 8px);
  }

  @media ${breakpoints.laptopL} {
    width: calc(50% - 10px);
  }
`;

function Filter() {
  const dispatch = useDispatch();
  const { boroughOptions, monthOptions } = useSelector(state => state.filter);

  const handleUpdateMonth = selected => {
    dispatch(updateMonth(selected));
  };

  const handleUpdateBorough = selected => {
    dispatch(updateBorough(selected));
  };

  return (
    <FilterContainer>
      <SelectContainer>
        <Select
          placeholder="Select Borough..."
          options={boroughOptions}
          onChange={handleUpdateBorough}
        />
      </SelectContainer>
      <SelectContainer>
        <Select
          placeholder="Select Month..."
          options={monthOptions}
          onChange={handleUpdateMonth}
        />
      </SelectContainer>
    </FilterContainer>
  );
}

export default Filter;
