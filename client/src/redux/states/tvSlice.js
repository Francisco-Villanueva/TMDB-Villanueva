import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPopular,
  getTopRated,
  getAiringToday,
  getOnTheAir,
} from "./actions/tvACtions";

export const fetchPopular = createAsyncThunk("tv/fetchPopular", getPopular);
export const fetchTopRated = createAsyncThunk("tv/fetchTopRated", getTopRated);
export const fetchAiringToday = createAsyncThunk(
  "tv/fetchOnTheAir",
  getOnTheAir
);
export const fetchOnTheAir = createAsyncThunk(
  "tv/fetchAiringToday",
  getAiringToday
);

const initialState = {
  tv_popular: [],
  tv_topRated: [],
  tv_onTheAir: [],
  tv_airingToday: [],
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      return {
        ...state,
        tv_popular: action.payload,
      };
    });

    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      return {
        ...state,
        tv_topRated: action.payload,
      };
    });
    builder.addCase(fetchAiringToday.fulfilled, (state, action) => {
      return {
        ...state,
        tv_airingToday: action.payload,
      };
    });

    builder.addCase(fetchOnTheAir.fulfilled, (state, action) => {
      return {
        ...state,
        tv_onTheAir: action.payload,
      };
    });
  },
});

export default tvSlice.reducer;
