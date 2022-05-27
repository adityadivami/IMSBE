const express = require("express");
const getAllEmployees = require("../controllers/employees.controller");
const router = express.Router();

router.get("/employees", getAllEmployees);

module.exports = router;
