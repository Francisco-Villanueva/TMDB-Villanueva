import axios from "axios";

export const getPopular = async () => {
  try {
    const res = await axios.get("http://localhost:4000/movies/popular");

    return res.data;
  } catch (error) {
    console.log("ERROR en  set popular", error);
  }
};

export const getTopRated = async () => {
  try {
    const res = await axios.get("http://localhost:4000/movies/topRated");

    return res.data;
  } catch (error) {
    console.log("ERROR en  set popular", error);
  }
};

export const getUpcoming = async () => {
  try {
    const res = await axios.get("http://localhost:4000/movies/upcoming");

    return res.data;
  } catch (error) {
    console.log("ERROR en  set popular", error);
  }
};

export const getNowPlaying = async () => {
  try {
    const res = await axios.get("http://localhost:4000/movies/nowPlaying");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideo = async (movie_id) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/movies/videos/${movie_id})`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
