import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getPopular,
  getNowPlaying,
  getTopRated,
  getUpcoming,
  getVideo,
} from "./actions/moviesActions";

export const fetchPopular = createAsyncThunk("movies/fetchPopular", getPopular);
export const fetchTopRated = createAsyncThunk(
  "movies/fetchTopRated",
  getTopRated
);
export const fetchUpComing = createAsyncThunk(
  "movies/fetchUpComing",
  getUpcoming
);
export const fetchNowPlaying = createAsyncThunk(
  "movies/fetchNowPlaying",
  getNowPlaying
);

export const fetchVideo = createAsyncThunk("movies/fetchVideo", getVideo);

const initialState = {
  movies_popular: [],
  movies_nowPlayings: [],
  movies_topRated: [],
  movies_upcoming: [],
  movie_video: {},
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      return {
        ...state,
        movies_popular: action.payload,
      };
    });

    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      return {
        ...state,
        movies_topRated: action.payload,
      };
    });
    builder.addCase(fetchNowPlaying.fulfilled, (state, action) => {
      return {
        ...state,
        movies_nowPlayings: action.payload,
      };
    });

    builder.addCase(fetchUpComing.fulfilled, (state, action) => {
      return {
        ...state,
        movies_upcoming: action.payload,
      };
    });
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      return {
        ...state,
        movie_video: action.payload,
      };
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
