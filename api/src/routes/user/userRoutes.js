const express = require("express");
const { validateUser } = require("../../middleware/auth");
const router = express.Router();

const { logOut, register, login, me, secret } = require("./services");
router.post("/register", register);
router.post("/login", login);
router.get("/secret", secret);
router.get("/me", validateUser, me);
router.post("/logout", logOut);

module.exports = router;
