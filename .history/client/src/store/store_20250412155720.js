import { configureStore } from "@reduxjs/toolkit";
import topDiscountsReducer from "../features/topDiscountsSlice";

export const store = configureStore({
  reducer: {
    topDiscounts: topDiscountsReducer,
  },
});
