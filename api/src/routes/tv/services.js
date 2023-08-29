const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getAiringToday = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(401).json({ error });
  }
};
const getOnTheAir = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(401).json({ error });
  }
};
const getPopular = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(401).json({ error });
  }
};
const getTopRated = async (req, res) => {
  try {
    const response = await axios.get(`
    https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = {
  getAiringToday,
  getOnTheAir,
  getPopular,
  getTopRated,
};
