const express = require("express");
const router = express.Router();
const {
  getAiringToday,
  getOnTheAir,
  getPopular,
  getTopRated,
} = require("./services");

router.get("/onTheAir", getOnTheAir);
router.get("/airingToday", getAiringToday);
router.get("/popular", getPopular);
router.get("/topRated", getTopRated);

module.exports = router;
