const express = require("express");
const getOneEmployee = require("../controllers/login.controller");
const router = express.Router();

router.post("/login", getOneEmployee);

module.exports = router;
