const express = require("express");
const router = express.Router();
const moviesRoutes = require("./movies/moviesRoutes");
const tvRoutes = require("./tv/tvRoutes");

router.use("/movies", moviesRoutes);
router.use("/tv", tvRoutes);

module.exports = router;

/*
MOVIES ROUTES:
http://localhost:4000/movies/nowPlaying
http://localhost:4000/movies/popular
http://localhost:4000/movies/topRated
http://localhost:4000/movies/upcoming


TV ROUTES:

http://localhost:4000/tv/airingToday
http://localhost:4000/tv/getOnTheAir
http://localhost:4000/tv/getPopular
http://localhost:4000/tv/getTopRated



*/