import {
  fetchAiringToday,
  fetchPopular as tvPopular,
  fetchTopRated as topRatedTv,
  fetchOnTheAir,
} from "../tvSlice";

import {
  fetchNowPlaying,
  fetchPopular as moviePopular,
  fetchTopRated as movieTopRated,
  fetchUpComing,
} from "../moviesSlice";

export const getAllInfo = async () => {
  fetchAiringToday();
  tvPopular();
  topRatedTv();
  fetchOnTheAir();
  fetchNowPlaying();
  moviePopular();
  movieTopRated();
  fetchUpComing();
};
