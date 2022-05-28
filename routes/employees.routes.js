const express = require("express");
const {
  getAllEmployees,
  createNewEmployee,
} = require("../controllers/employees.controller");
const router = express.Router();

router
  .get("/employees/get", getAllEmployees)
  .post("/employee/create", createNewEmployee);

module.exports = router;
