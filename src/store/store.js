import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "../reducers/dataReducer";
import filterReducer from "../reducers/filterReducer";

const reducer = {
  data: dataReducer,
  filter: filterReducer,
};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
