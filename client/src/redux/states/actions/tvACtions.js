import axios from "axios";

export const getPopular = async () => {
  try {
    const res = await axios.get("http://localhost:4000/tv/popular");

    return res.data;
  } catch (error) {
    console.log("ERROR en  set popular", error);
  }
};

export const getTopRated = async () => {
  try {
    const res = await axios.get("http://localhost:4000/tv/topRated");

    return res.data;
  } catch (error) {
    console.log("ERROR en  set popular", error);
  }
};

export const getOnTheAir = async () => {
  try {
    const res = await axios.get("http://localhost:4000/tv/onTheAir");

    return res.data;
  } catch (error) {
    console.log("ERROR en  set popular", error);
  }
};

export const getAiringToday = async () => {
  try {
    const res = await axios.get("http://localhost:4000/tv/airingToday");

    return res.data;
  } catch (error) {
    console.log("ERROR en  set popular", error);
  }
};
