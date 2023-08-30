const express = require("express");
const router = express.Router();
const {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
  getVideoKey,
  searchMovie,
  getDetails,
  getSimilar,
} = require("./services");

router.get("/nowPlaying", getNowPlaying);
router.get("/popular", getPopular);
router.get("/topRated", getTopRated);
router.get("/upcoming", getUpcoming);
router.get("/videos/:movie_id", getVideoKey);
router.get("/search/s=:movie_name", searchMovie);
router.get("/deatails/:movie_id", getDetails);
router.get("/similar/:movie_id", getSimilar);

module.exports = router;
