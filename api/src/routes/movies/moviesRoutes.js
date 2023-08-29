const express = require("express");
const router = express.Router();
const {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  getVideoKey,
  searchMovie,
} = require("./services");

router.get("/nowPlaying", getNowPlaying);
router.get("/popular", getPopular);
router.get("/topRated", getTopRated);
router.get("/upcoming", getUpcoming);
router.get("/videos/:movie_id", getVideoKey);
router.get("/search", searchMovie);

module.exports = router;
