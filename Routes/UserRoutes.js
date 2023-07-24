// routes/userRoutes.js

const express = require("express");

const userController = require("../Controllers/UserController");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/forgot-password", userController.forgotPassword);
router.post("/reset-password", userController.resetPassword);
router.post("/login", userController.login);

module.exports = router;
