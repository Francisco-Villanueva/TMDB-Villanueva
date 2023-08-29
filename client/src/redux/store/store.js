import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../states/moviesSlice";
import tvReducer from "../states/tvSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tv: tvReducer,
  },
});
