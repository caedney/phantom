import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: null,
  borough: null,
  monthOptions: [
    { value: "2020-01", label: "January" },
    { value: "2020-02", label: "February" },
    { value: "2020-03", label: "March" },
    { value: "2020-04", label: "April" },
    { value: "2020-05", label: "May" },
    { value: "2020-06", label: "June" },
    { value: "2020-07", label: "July" },
    { value: "2020-08", label: "August" },
    { value: "2020-09", label: "September" },
    { value: "2020-10", label: "October" },
    { value: "2020-11", label: "November" },
    { value: "2020-12", label: "December" },
  ],
  boroughOptions: [],
};

const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateMonth: (state, { payload }) => {
      return {
        ...state,
        month: payload,
      };
    },
    updateBorough: (state, { payload }) => {
      return {
        ...state,
        borough: payload,
      };
    },
    updateBoroughOptions: (state, { payload }) => {
      return {
        ...state,
        boroughOptions: payload,
      };
    },
  },
});

export const { updateMonth, updateBorough, updateBoroughOptions } =
  filterReducer.actions;

export default filterReducer.reducer;
