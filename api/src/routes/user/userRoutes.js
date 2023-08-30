const express = require("express");
const { validateUser } = require("../../middleware/auth");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createPlaylist,
  addToPlaylist,
  addFavorite,
  getPlaylist,
} = require("./services");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/:userId/favorites/:movieId", addFavorite);
router.post("/:userId/playlist", createPlaylist);
router.get("/:userId/playlist", getPlaylist);
router.post("/:userId/playlist/:playlist_id/:movieId", addToPlaylist);

const { logOut, register, login, me, secret } = require("./logServices");
router.post("/register", register);
router.post("/login", login);
router.get("/secret", secret);
router.get("/me", validateUser, me);
router.post("/logout", logOut);

module.exports = router;
