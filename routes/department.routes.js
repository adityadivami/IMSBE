const express = require("express");
const getAllDepartments = require("../controllers/departments.controller");
const router = express.Router();

router.get("/departments", getAllDepartments);

module.exports = router;
