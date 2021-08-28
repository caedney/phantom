import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: null,
  borough: null,
};

const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateMonth: (state, { payload }) => {
      return {
        ...state,
        month: payload && payload.value,
      };
    },
    updateBorough: (state, { payload }) => {
      return {
        ...state,
        borough: payload,
      };
    },
  },
});

export const { updateMonth, updateBorough } = filterReducer.actions;

export default filterReducer.reducer;
