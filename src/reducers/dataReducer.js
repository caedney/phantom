import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  labels: [],
  newCases: [],
  totalCases: [],
};

const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, { payload }) => {
      return {
        ...state,
        data: payload,
      };
    },
    updateIsLoading: (state, { payload }) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
    updateLabels: (state, { payload }) => {
      return {
        ...state,
        labels: payload,
      };
    },
    updateNewCases: (state, { payload }) => {
      return {
        ...state,
        newCases: payload,
      };
    },
    updateTotalCases: (state, { payload }) => {
      return {
        ...state,
        totalCases: payload,
      };
    },
  },
});

export const {
  updateData,
  updateIsLoading,
  updateLabels,
  updateNewCases,
  updateTotalCases,
} = dataReducer.actions;

export default dataReducer.reducer;
