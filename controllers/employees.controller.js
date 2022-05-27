const db = require("../models");
const Employees = db.employees;
const Op = db.Sequelize.Op;

const getAllEmployees = (req, res, next) => {
  Employees.findAll()
    .then((response) => {
      res.status(200).send({ success: true, message: response });
    })
    .catch(() => {
      res.status(400).send({ success: false, message: "failed to get data" });
    });
};

module.exports = getAllEmployees;
