const express = require("express");

const router = express.Router();
const AuthController = require("../controllers/Auth.controller");

router.post("/register", AuthController.registerUserController);
router.post("/login", AuthController.loginUserController);

module.exports = router;