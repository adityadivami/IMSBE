const express = require("express");
const getAllDepartments = require("../controllers/departments.controller");
const router = express.Router();

router.get("/departments", getAllDepartments);

router.post("/departments", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /departments",
  });
});

router.patch("/:departmentId", getAllDepartments);

router.delete("/:departmentId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted departments !",
  });
});

module.exports = router;
