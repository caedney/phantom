import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{}],
};

const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, { payload }) => {
      return payload;
    },
  },
});

export const { updateData } = dataReducer.actions;

export default dataReducer.reducer;
