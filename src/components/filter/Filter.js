import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Select from "../Select/Select";
import {
  updateMonth,
  updateBorough,
  updateBoroughOptions,
} from "../../reducers/filterReducer";
import breakpoints from "../../utils/breakpoints";

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

  useEffect(() => {
    async function fetchBoroughs() {
      return await fetch(
        "https://data.london.gov.uk/api/table/s8c9t_j4fs2?sql=SELECT DISTINCT area_name FROM dataset"
      );
    }

    return fetchBoroughs()
      .then(res => res.json())
      .then(data => {
        const options = data.rows
          .map(row => ({
            value: row.area_name,
            label: row.area_name,
          }))
          .sort((a, b) => (a.label < b.label ? -1 : 1));

        dispatch(updateBoroughOptions(options));
      })
      .catch(console.log);
  }, [dispatch]);

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
